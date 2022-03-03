<div align="center">
  <h1><code>node-autoit-napi</code></h1>

  <p>
    <strong>made with love 🤡</strong>
  </p>
  <p>
    Forked from xhawk18/node-autoit
  </p>
</div>

## <code>How to install</code>

```shell
npm i node-autoit-napi
# or
yarn add node-autoit-napi
```
```shell
# config @vercel/pkg
{
  "pkg": {
    "assets": [
        "node_modules/ref-napi/**/*.node",
        "node_modules/node-autoit-napi/**/*.dll",
        "node_modules/ref-struct-napi/**/*.node",
        "node_modules/ffi-napi/**/*.node"
    ],
  }
}
```

## <code>Compatibility with @xhawk18 version</code>

```javascript
// Spell this line and take that magic ✨
const au = require("node-autoit-napi").old;

// @xhawk18 test.js
// here is docs: https://github.com/xhawk18/node-autoit
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
```

## <code>New magic book ✨ (async). Compatibility newest nodejs LTS</code>

```javascript
const autoit = require("./index");
const titleBuilder = autoit.titleBuilder;

// Cleaner 🤔
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
```

```javascript
// Title builder util
const autoit = require("../index");

const untitledNotepadTile = autoit
  .titleBuilder()
  .title({
    endsWith: "- Notepad",
    startsWith: "Untitled -",
  })
  .title(
    {
      contains: "tItLeD - nOtE",
    },
    // caseless
    true
  )
  .class("Notepad")
  .class({
    endsWith: "pad",
  })
  .build();

// [REGEXPTITLE:^(.*)- Notepad$; REGEXPTITLE:^Untitled -(.*)$; REGEXPTITLE:(?i)^(.*)tItLeD - nOtE(.*)$; CLASS:Notepad; REGEXPCLASS:^(.*)pad$]
console.log(untitledNotepadTile);
```

## <code>API</code>

```javascript
async function init(): Promise<void>
```

```javascript
async function error(): Promise<number>
```

```javascript
async function autoItSetOption(
  option: string,
  value: number
): Promise<number>
```

```javascript
async function clipGet(
  options: { bufSize?: number }
): Promise<string>
```

```javascript
async function clipPut(clip: string): Promise<void>
```

```javascript
async function controlClick(
  title: string,
  control: string,
  options: {
    text?: string;
    button?: string;
    numClicks?: number;
    x?: number;
    y?: number;
  }
): Promise<number>
```

```javascript
async function controlClickByHandle(
  wnd: number,
  ctrl: number,
  options: { button?: string; numClicks?: number; x?: number; y?: number }
): Promise<number>
```

```javascript
async function controlCommand(
  title: string,
  control: string,
  command: string,
  options: { text?: string; extra?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function controlCommandByHandle(
  wnd: number,
  ctrl: number,
  command: string,
  options: { extra?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function controlListView(
  title: string,
  control: string,
  command: string,
  options: {
    text?: string;
    extra1?: string;
    extra2?: string;
    bufSize?: number;
  }
): Promise<string>
```

```javascript
async function controlListViewByHandle(
  wnd: number,
  ctrl: number,
  command: string,
  options: { extra1?: string; extra2?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function controlDisable(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function controlDisableByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```javascript
async function controlEnable(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function controlEnableByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```javascript
async function controlFocus(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function controlFocusByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```javascript
async function controlGetFocus(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function controlGetFocusByHandle(
  wnd: number,
  options: { bufSize?: number }
): Promise<string>
```

```javascript
async function controlGetHandle(
  wnd: number,
  control: string
): Promise<number>
```

```javascript
async function controlGetHandleAsText(
  title: string,
  control: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function controlGetPos(
  title: string,
  control: string,
  options: { text?: string }
): Promise<Rect>
```

```javascript
async function controlGetPosByHandle(
  wnd: number,
  ctrl: number
): Promise<Rect>
```

```javascript
async function controlGetText(
  title: string,
  control: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function controlGetTextByHandle(
  wnd: number,
  ctrl: number,
  options: { bufSize?: number }
): Promise<string>
```

```javascript
async function controlHide(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function controlHideByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```javascript
async function controlMove(
  title: string,
  control: string,
  x: number,
  y: number,
  options: { text?: string; width?: number; height?: number }
): Promise<number>
```

```javascript
async function controlMoveByHandle(
  wnd: number,
  ctrl: number,
  x: number,
  y: number,
  options: { width?: number; height?: number }
): Promise<number>
```

```javascript
async function controlSend(
  title: string,
  control: string,
  sendText: string,
  options: { text?: string; mode?: number }
): Promise<number>
```

```javascript
async function controlSendByHandle(
  wnd: number,
  ctrl: number,
  sendText: string,
  options: { mode?: number }
): Promise<number>
```

```javascript
async function controlSetText(
  title: string,
  control: string,
  controlText: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function controlSetTextByHandle(
  wnd: number,
  ctrl: number,
  controlText: string
): Promise<number>
```

```javascript
async function controlShow(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function controlShowByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```javascript
async function controlTreeView(
  title: string,
  control: string,
  command: string,
  options: {
    text?: string;
    extra1?: string;
    extra2?: string;
    bufSize?: number;
  }
): Promise<string>
```

```javascript
async function controlTreeViewByHandle(
  wnd: number,
  ctrl: number,
  command: string,
  options: { extra1?: string; extra2?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function driveMapAdd(
  device: string,
  share: string,
  flags: number,
  options: { user?: string; pwd?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function driveMapDel(device: string): Promise<number>
```

```javascript
async function driveMapGet(
  device: string,
  options: { bufSize?: number }
): Promise<string>
```

```javascript
async function isAdmin(): Promise<number>
```

```javascript
async function mouseClick(
  options: {
    button?: string;
    x?: number;
    y?: number;
    clicks?: number;
    speed?: number;
  }
): Promise<number>
```

```javascript
async function mouseClickDrag(
  button: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  options: { speed?: number }
): Promise<number>
```

```javascript
async function mouseDown(
  options: { button?: string }
): Promise<void>
```

```javascript
async function mouseGetCursor(): Promise<number>
```

```javascript
async function mouseGetPos(): Promise<Position>
```

```javascript
async function mouseMove(
  x: number,
  y: number,
  options: { speed?: number }
): Promise<number>
```

```javascript
async function mouseUp(
  options: { button?: string }
): Promise<void>
```

```javascript
async function mouseWheel(
  direction: string,
  clicks: number
): Promise<void>
```

```javascript
async function opt(option: string, value: number): Promise<number>
```

```javascript
async function pixelChecksum(
  lpRect: Rect,
  options: { step?: number }
): Promise<number>
```

```javascript
async function pixelGetColor(x: number, y: number): Promise<number>
```

```javascript
async function pixelSearch(
  lpRect: Rect,
  color: number,
  options: { variation?: number; step?: number }
): Promise<Position>
```

```javascript
async function processClose(process: string): Promise<number>
```

```javascript
async function processExists(process: string): Promise<number>
```

```javascript
async function processSetPriority(
  process: string,
  priority: number
): Promise<number>
```

```javascript
async function processWait(
  process: string,
  options: { timeout?: number }
): Promise<number>
```

```javascript
async function processWaitClose(
  process: string,
  options: { timeout?: number }
): Promise<number>
```

```javascript
async function run(
  program: string,
  options: { dir?: string; showFlag?: number }
): Promise<number>
```

```javascript
async function runWait(
  program: string,
  options: { dir?: string; showFlag?: number }
): Promise<number>
```

```javascript
async function runAs(
  user: string,
  domain: string,
  password: string,
  logonFlag: number,
  program: string,
  options: { dir?: string; showFlag?: number }
): Promise<number>
```

```javascript
async function runAsWait(
  user: string,
  domain: string,
  password: string,
  logonFlag: number,
  program: string,
  options: { dir?: string; showFlag?: number }
): Promise<number>
```

```javascript
async function send(
  sendText: string,
  options: { mode?: number }
): Promise<void>
```

```javascript
async function shutdown(flags: number): Promise<number>
```

```javascript
async function sleep(milliseconds: number): Promise<void>
```

```javascript
async function statusbarGetText(
  title: string,
  options: { text?: string; part?: number; bufSize?: number }
): Promise<string>
```

```javascript
async function statusbarGetTextByHandle(
  wnd: number,
  options: { part?: number; bufSize?: number }
): Promise<string>
```

```javascript
async function toolTip(
  tip: string,
  options: { x?: number; y?: number }
): Promise<void>
```

```javascript
async function winActivate(
  title: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winActivateByHandle(wnd: number): Promise<number>
```

```javascript
async function winActive(
  title: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winActiveByHandle(wnd: number): Promise<number>
```

```javascript
async function winClose(
  title: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winCloseByHandle(wnd: number): Promise<number>
```

```javascript
async function winExists(
  title: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winExistsByHandle(wnd: number): Promise<number>
```

```javascript
async function winGetCaretPos(): Promise<Position>
```

```javascript
async function winGetClassList(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function winGetClassListByHandle(
  wnd: number,
  options: { bufSize?: number }
): Promise<string>
```

```javascript
async function winGetClientSize(
  title: string,
  options: { text?: string }
): Promise<Rect>
```

```javascript
async function winGetClientSizeByHandle(wnd: number): Promise<Rect>
```

```javascript
async function winGetHandle(
  title: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winGetHandleAsText(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function winGetPos(
  title: string,
  options: { text?: string }
): Promise<Rect>
```

```javascript
async function winGetPosByHandle(wnd: number): Promise<Rect>
```

```javascript
async function winGetProcess(
  title: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winGetProcessByHandle(wnd: number): Promise<number>
```

```javascript
async function winGetState(
  title: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winGetStateByHandle(wnd: number): Promise<number>
```

```javascript
async function winGetText(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function winGetTextByHandle(
  wnd: number,
  options: { bufSize?: number }
): Promise<string>
```

```javascript
async function winGetTitle(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```javascript
async function winGetTitleByHandle(
  wnd: number,
  options: { bufSize?: number }
): Promise<string>
```

```javascript
async function winKill(
  title: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winKillByHandle(wnd: number): Promise<number>
```

```javascript
async function winMenuSelectItem(
  title: string,
  item1: string,
  options: {
    text?: string;
    item2?: string;
    item3?: string;
    item4?: string;
    item5?: string;
    item6?: string;
    item7?: string;
    item8?: string;
  }
): Promise<number>
```

```javascript
async function winMenuSelectItemByHandle(
  wnd: number,
  item1: string,
  options: {
    item2?: string;
    item3?: string;
    item4?: string;
    item5?: string;
    item6?: string;
    item7?: string;
    item8?: string;
  }
): Promise<number>
```

```javascript
async function winMinimizeAll(): Promise<void>
```

```javascript
async function winMinimizeAllUndo(): Promise<void>
```

```javascript
async function winMove(
  title: string,
  x: number,
  y: number,
  options: { text?: string; width?: number; height?: number }
): Promise<number>
```

```javascript
async function winMoveByHandle(
  wnd: number,
  x: number,
  y: number,
  options: { width?: number; height?: number }
): Promise<number>
```

```javascript
async function winSetOnTop(
  title: string,
  flag: number,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winSetOnTopByHandle(
  wnd: number,
  flag: number
): Promise<number>
```

```javascript
async function winSetState(
  title: string,
  flags: number,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winSetStateByHandle(
  wnd: number,
  flags: number
): Promise<number>
```

```javascript
async function winSetTitle(
  title: string,
  newTitle: string,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winSetTitleByHandle(
  wnd: number,
  newTitle: string
): Promise<number>
```

```javascript
async function winSetTrans(
  title: string,
  trans: number,
  options: { text?: string }
): Promise<number>
```

```javascript
async function winSetTransByHandle(
  wnd: number,
  trans: number
): Promise<number>
```

```javascript
async function winWait(
  title: string,
  options: { text?: string; timeout?: number }
): Promise<number>
```

```javascript
async function winWaitByHandle(
  wnd: number,
  options: { timeout?: number }
): Promise<number>
```

```javascript
async function winWaitActive(
  title: string,
  options: { text?: string; timeout?: number }
): Promise<number>
```

```javascript
async function winWaitActiveByHandle(
  wnd: number,
  options: { timeout?: number }
): Promise<number>
```

```javascript
async function winWaitClose(
  title: string,
  options: { text?: string; timeout?: number }
): Promise<number>
```

```javascript
async function winWaitCloseByHandle(
  wnd: number,
  options: { timeout?: number }
): Promise<number>
```

```javascript
async function winWaitNotActive(
  title: string,
  options: { text?: string; timeout?: number }
): Promise<number>
```

```javascript
async function winWaitNotActiveByHandle(
  wnd: number,
  options: { timeout?: number }
): Promise<number>
```

```javascript
async function postMessage(
  wnd: number,
  msg: number,
  options: { wParam?: number; lParam?: number }
): Promise<number>
```

```javascript
async function sendMessage(
  wnd: number,
  msg: number,
  options: { wParam?: number; lParam?: number }
): Promise<number>
```
