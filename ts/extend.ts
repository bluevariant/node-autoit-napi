import * as _ from "lodash";

export type Position = {
  x: number;
  y: number;
};

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function cleanResult(result, targetType): any {
  if (targetType === "Position") {
    return {
      x: result.x,
      y: result.y,
    };
  }

  if (targetType === "Rect") {
    return {
      x: result.left,
      y: result.top,
      width: result.right - result.left,
      height: result.bottom - result.top,
    };
  }

  return result;
}

export type RegExp = {
  contains?: string;
  startsWith?: string;
  endsWith?: string;
};

export class TitleBuilder {
  data: Array<string>;

  constructor() {
    this.data = [];
  }

  class(value: string | RegExp, caseless?: boolean): TitleBuilder {
    return this.some("CLASS", value, caseless);
  }

  title(title: string | RegExp, caseless?: boolean): TitleBuilder {
    return this.some("TITLE", title, caseless);
  }

  some(
    id: "TITLE" | "CLASS",
    some: string | RegExp,
    caseless?: boolean
  ): TitleBuilder {
    if (typeof some === "string") {
      if (caseless) {
        this.data.push(`REGEXP${id}:(?i)^${_.escapeRegExp(some)}(.*)$`);
      } else {
        this.data.push(`${id}:${some}`);
      }
    } else {
      _.forEach(some as any, (v, k) => {
        v = _.escapeRegExp(v);

        switch (k) {
          case "contains":
            this.data.push(
              `REGEXP${id}:${caseless ? "(?i)" : ""}^(.*)${v}(.*)$`
            );
            break;
          case "startsWith":
            this.data.push(`REGEXP${id}:${caseless ? "(?i)" : ""}^${v}(.*)$`);
            break;
          case "endsWith":
            this.data.push(`REGEXP${id}:${caseless ? "(?i)" : ""}^(.*)${v}$`);
            break;
        }
      });
    }

    return this;
  }

  last(): TitleBuilder {
    this.data.push("LAST");

    return this;
  }

  active(): TitleBuilder {
    this.data.push("ACTIVE");

    return this;
  }

  instance(instance: number): TitleBuilder {
    this.data.push(`INSTANCE:${instance}`);

    return this;
  }

  build(): string {
    return `[${this.data.join("; ")}]`;
  }
}

export function titleBuilder() {
  return new TitleBuilder();
}

export const titbI = {
  get titb(): TitleBuilder {
    return titleBuilder();
  },
};
