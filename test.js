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
const titleBuilder = autoit.titleBuilder;

async function main() {
  const props = {
    // [CLASS:Notepad]
    classNotepad: titleBuilder().class("Notepad").build(),
    // [TITLE:Notepad]
    titleNotepad: titleBuilder().title("Notepad").build(),
    // [CLASS:Edit]
    ctrlClassEdit: titleBuilder().class("Edit").build(),
    // [CLASS:Button; INSTANCE:2]
    ctrlClassButton2: titleBuilder().class("Button").instance(2).build(),
  };

  await autoit.init();
  await autoit.run("notepad.exe");
  await autoit.winWait(props.classNotepad);
  await autoit.send("Hello, autoit & nodejs!");

  const isVisible = await autoit.controlCommand(
    props.classNotepad,
    props.ctrlClassEdit,
    "IsVisible",
    {
      text: "",
    }
  );

  console.assert(isVisible === "1", isVisible);

  await autoit.winClose(props.classNotepad);
  await autoit.winWaitActive(props.titleNotepad);
  await autoit.controlClick(props.titleNotepad, props.ctrlClassButton2);
  await autoit.winWaitClose(props.classNotepad);

  console.assert(!(await autoit.winExists(props.classNotepad)), "winExists");
}

main().catch(console.error);
