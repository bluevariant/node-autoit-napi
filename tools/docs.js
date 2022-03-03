const autoit = require("../old");
const fs = require("fs");
const path = require("path");
const assert = require("assert");
const prettier = require("prettier");

const mdDocs = fs
  .readFileSync(path.join(__dirname, "../readme-old.md"), "UTF8")
  .split("### API list")[1]
  .split("## License")[0];

function getType(param) {
  if (param === "none") return "void";
  if (param === "integer") return "number";
  if (["lpPoint", "pPointResult"].includes(param)) return "Position";
  if (["lpRect"].includes(param)) return "Rect";

  if (param.startsWith("sz")) return "string";
  if (param.startsWith("n")) return "number";
  if (param.startsWith("h")) return "number";

  return undefined;
}

function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function removeTypeInName(symbol, name) {
  if (name.startsWith(symbol) && name.length > symbol.length) {
    let newName = name.replace(symbol, "");

    if (newName.charAt(0) === newName.charAt(0).toUpperCase()) {
      name = lowerFirstLetter(newName);
    }
  }

  return { var: "variation", col: "color" }[name] || name;
}

function getRawName(oldName) {
  if (oldName.startsWith("sz")) {
    oldName = removeTypeInName("sz", oldName);
  } else if (oldName.startsWith("n")) {
    oldName = removeTypeInName("n", oldName);
  } else if (oldName.startsWith("h")) {
    oldName = removeTypeInName("h", oldName);
  }

  return oldName;
}

function getFnInfo(fnName, isByHandleFn) {
  if (isByHandleFn) {
    fnName = fnName.replace("ByHandle", "");
  }

  const wall = `#### ${fnName}(${isByHandleFn ? "hWnd" : ""}`;
  let doc = mdDocs.split(wall)[1].split("####")[0].trim();

  if (isByHandleFn) {
    doc = "hWnd" + doc;
  }

  assert(doc.includes(")") && doc.split(")").length === 2);

  doc = doc.replace(");", ")");

  let [params, returnType] = doc.split(")").map((v) => v.trim());

  assert(returnType.length > 0 && returnType.startsWith("Return:"));

  let oldReturnType = returnType.replace("Return:", "").trim();
  returnType = getType(oldReturnType);

  assert(returnType !== undefined, oldReturnType);

  return {
    params: params
      .split(",")
      .map((v) => v.trim())
      .map((param) => {
        let oldParam = param;
        let isOption = param.includes("]");
        param = param.replace(/\[/g, "").replace(/]/g, "").trim();

        if (!!param) {
          assert(getType(param) !== undefined, oldParam);
          assert(!param.includes("]"), oldParam);
          assert(!param.includes("["), oldParam);
        }

        return {
          name: getRawName(param),
          isOption,
          type: !!param ? getType(param) : undefined,
        };
      })
      .filter((v) => v.name.length > 0),
    returnType,
  };
}

let tsFns = [];

for (let fnName of Object.keys(autoit)) {
  const fn = autoit[fnName];

  if (typeof fn !== "function") continue;

  let isByHandleFn = fnName.endsWith("ByHandle");
  let isValidFn = mdDocs.includes(` ${fnName}(`) || isByHandleFn;

  if (!isValidFn) continue;

  const fnInfo = getFnInfo(fnName, isByHandleFn);

  const tsRequireParams = fnInfo.params
    .filter((v) => !v.isOption)
    .map((param) => `${param.name}${param.isOption ? "?" : ""}: ${param.type}`)
    .join(", ");
  const tsOptionParams = fnInfo.params
    .filter((v) => v.isOption)
    .map((param) => `${param.name}${param.isOption ? "?" : ""}: ${param.type}`)
    .join(", ");
  const lFnName = lowerFirstLetter(fnName);
  const tsFnParams = fnInfo.params.map((v) => v.name).join(", ");
  const tsFnOptionParams = fnInfo.params
    .filter((v) => v.isOption)
    .map((v) => v.name)
    .join(", ");
  const tsFn = `
export async function ${lFnName}(${
    tsRequireParams.length ? `${tsRequireParams}, ` : ""
  }${
    tsOptionParams.length ? `options: { ${tsOptionParams} } = {}` : ""
  }): Promise<${fnInfo.returnType}> {
  ${tsFnOptionParams.length ? `const { ${tsFnOptionParams} } = options;` : ""}

  return new Promise<${fnInfo.returnType}>((rel, rej) => {
    autoit.${fnName}.async(${tsFnParams}${
    tsFnParams.length ? ", " : ""
  }(err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "${fnInfo.returnType}"));
    });
  });
}
  `.trim();

  tsFns.push(tsFn);
}

const code = prettier
  .format(
    `
/**
* Auto generate file
*/
declare var require: any

import { Position, Rect, cleanResult } from "./extend";

const autoit = require("../old.js");

${tsFns.join("\n\n")}
`,
    { parser: "typescript" }
  )
  .trim();

fs.writeFileSync(path.join(__dirname, "../ts/index.ts"), code);

const docs = code
  .split("export ")
  .filter((v) => v.startsWith("async"))
  .map((v) => v.split("> {")[0].trim() + ">")
  .map((v) => v.replace("} = {}", "}"))
  .map((v) => "```\n" + v + "\n```")
  .join("\n\n");
const readmeFile = path.join(__dirname, "../README.md");
const readme =
  fs.readFileSync(readmeFile, "UTF8").split("### <code>API</code>")[0] +
  "### <code>API</code>";

fs.writeFileSync(readmeFile, readme + "\n\n" + docs + "\n");
