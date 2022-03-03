// old system
// var au = require("./index").old;
//
// au.Init();
// au.Run("notepad.exe");
// au.WinWait("[Class:Notepad]");
// au.Send("Hello, autoit & nodejs!");
//
// var isVisible = au.ControlCommand(
//   "[Class:Notepad]",
//   "",
//   "[CLASS:Edit]",
//   "IsVisible"
// );
// console.log(isVisible);

const autoit = require("./index");

async function main() {
  await autoit.init();
  await autoit.run("notepad.exe");
  await autoit.winWait("[CLASS:Notepad]");
  await autoit.send("Hello, autoit & nodejs!");

  const isVisible = await autoit.controlCommand(
    "[CLASS:Notepad]",
    "[CLASS:Edit]",
    "IsVisible",
    {
      text: "",
    }
  );

  console.assert(isVisible === "1", isVisible);

  await autoit.winClose("[CLASS:Notepad]");
  await autoit.winWaitActive("[TITLE:Notepad]");
  await autoit.controlClick("[TITLE:Notepad]", "[CLASS:Button; INSTANCE:2]");
  await autoit.winWaitClose("[CLASS:Notepad]");

  console.assert(!(await autoit.winExists("[CLASS:Notepad]")));
}

main().catch(console.error);
