<div align="center">
  <h1><code>node-autoit-napi</code></h1>

  <p>
    <strong>made with love 🤡</strong>
  </p>
  <p>
    Forked from xhawk18/node-autoit
  </p>
</div>

### <code>How to install</code>

```
npm i node-autoit-napi
// or
yarn add node-autoit-napi
```

### <code>Compatibility with @xhawk18 version</code>

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

### <code>New magic book ✨ (async). Compatibility newest nodejs LTS</code>

```javascript
const autoit = require("node-autoit-napi");

// Cleaner 🤔
async function main() {
  await autoit.init();
  await autoit.run("notepad.exe");
  await autoit.winWait("[CLASS:Notepad]");
  await autoit.send("Hello, autoit & nodejs!");

  const isVisible = await autoit.controlCommand(
    "[CLASS:Notepad]",
    "[CLASS:Edit]",
    "IsVisible"
  );

  console.assert(isVisible === "1", isVisible);

  await autoit.winClose("[CLASS:Notepad]");
  await autoit.winWaitActive("[TITLE:Notepad]");
  await autoit.controlClick("[TITLE:Notepad]", "[CLASS:Button; INSTANCE:2]");
  await autoit.winWaitClose("[CLASS:Notepad]");

  console.assert(!(await autoit.winExists("[CLASS:Notepad]")));
}

main().catch(console.error);
```

### <code>API</code>

```
async function init(): Promise<void>
```

```
async function error(): Promise<number>
```

```
async function autoItSetOption(
  option: string,
  value: number
): Promise<number>
```

```
async function clipGet(
  options: { bufSize?: number }
): Promise<string>
```

```
async function clipPut(clip: string): Promise<void>
```

```
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

```
async function controlClickByHandle(
  wnd: number,
  ctrl: number,
  options: { button?: string; numClicks?: number; x?: number; y?: number }
): Promise<number>
```

```
async function controlCommand(
  title: string,
  control: string,
  command: string,
  options: { text?: string; extra?: string; bufSize?: number }
): Promise<string>
```

```
async function controlCommandByHandle(
  wnd: number,
  ctrl: number,
  command: string,
  options: { extra?: string; bufSize?: number }
): Promise<string>
```

```
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

```
async function controlListViewByHandle(
  wnd: number,
  ctrl: number,
  command: string,
  options: { extra1?: string; extra2?: string; bufSize?: number }
): Promise<string>
```

```
async function controlDisable(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```
async function controlDisableByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```
async function controlEnable(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```
async function controlEnableByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```
async function controlFocus(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```
async function controlFocusByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```
async function controlGetFocus(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```
async function controlGetFocusByHandle(
  wnd: number,
  options: { bufSize?: number }
): Promise<string>
```

```
async function controlGetHandle(
  wnd: number,
  control: string
): Promise<number>
```

```
async function controlGetHandleAsText(
  title: string,
  control: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```
async function controlGetPos(
  title: string,
  control: string,
  options: { text?: string }
): Promise<Rect>
```

```
async function controlGetPosByHandle(
  wnd: number,
  ctrl: number
): Promise<Rect>
```

```
async function controlGetText(
  title: string,
  control: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```
async function controlGetTextByHandle(
  wnd: number,
  ctrl: number,
  options: { bufSize?: number }
): Promise<string>
```

```
async function controlHide(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```
async function controlHideByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```
async function controlMove(
  title: string,
  control: string,
  x: number,
  y: number,
  options: { text?: string; width?: number; height?: number }
): Promise<number>
```

```
async function controlMoveByHandle(
  wnd: number,
  ctrl: number,
  x: number,
  y: number,
  options: { width?: number; height?: number }
): Promise<number>
```

```
async function controlSend(
  title: string,
  control: string,
  sendText: string,
  options: { text?: string; mode?: number }
): Promise<number>
```

```
async function controlSendByHandle(
  wnd: number,
  ctrl: number,
  sendText: string,
  options: { mode?: number }
): Promise<number>
```

```
async function controlSetText(
  title: string,
  control: string,
  controlText: string,
  options: { text?: string }
): Promise<number>
```

```
async function controlSetTextByHandle(
  wnd: number,
  ctrl: number,
  controlText: string
): Promise<number>
```

```
async function controlShow(
  title: string,
  control: string,
  options: { text?: string }
): Promise<number>
```

```
async function controlShowByHandle(
  wnd: number,
  ctrl: number
): Promise<number>
```

```
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

```
async function controlTreeViewByHandle(
  wnd: number,
  ctrl: number,
  command: string,
  options: { extra1?: string; extra2?: string; bufSize?: number }
): Promise<string>
```

```
async function driveMapAdd(
  device: string,
  share: string,
  flags: number,
  options: { user?: string; pwd?: string; bufSize?: number }
): Promise<string>
```

```
async function driveMapDel(device: string): Promise<number>
```

```
async function driveMapGet(
  device: string,
  options: { bufSize?: number }
): Promise<string>
```

```
async function isAdmin(): Promise<number>
```

```
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

```
async function mouseClickDrag(
  button: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  options: { speed?: number }
): Promise<number>
```

```
async function mouseDown(
  options: { button?: string }
): Promise<void>
```

```
async function mouseGetCursor(): Promise<number>
```

```
async function mouseGetPos(): Promise<Position>
```

```
async function mouseMove(
  x: number,
  y: number,
  options: { speed?: number }
): Promise<number>
```

```
async function mouseUp(
  options: { button?: string }
): Promise<void>
```

```
async function mouseWheel(
  direction: string,
  clicks: number
): Promise<void>
```

```
async function opt(option: string, value: number): Promise<number>
```

```
async function pixelChecksum(
  lpRect: Rect,
  options: { step?: number }
): Promise<number>
```

```
async function pixelGetColor(x: number, y: number): Promise<number>
```

```
async function pixelSearch(
  lpRect: Rect,
  color: number,
  options: { variation?: number; step?: number }
): Promise<Position>
```

```
async function processClose(process: string): Promise<number>
```

```
async function processExists(process: string): Promise<number>
```

```
async function processSetPriority(
  process: string,
  priority: number
): Promise<number>
```

```
async function processWait(
  process: string,
  options: { timeout?: number }
): Promise<number>
```

```
async function processWaitClose(
  process: string,
  options: { timeout?: number }
): Promise<number>
```

```
async function run(
  program: string,
  options: { dir?: string; showFlag?: number }
): Promise<number>
```

```
async function runWait(
  program: string,
  options: { dir?: string; showFlag?: number }
): Promise<number>
```

```
async function runAs(
  user: string,
  domain: string,
  password: string,
  logonFlag: number,
  program: string,
  options: { dir?: string; showFlag?: number }
): Promise<number>
```

```
async function runAsWait(
  user: string,
  domain: string,
  password: string,
  logonFlag: number,
  program: string,
  options: { dir?: string; showFlag?: number }
): Promise<number>
```

```
async function send(
  sendText: string,
  options: { mode?: number }
): Promise<void>
```

```
async function shutdown(flags: number): Promise<number>
```

```
async function sleep(milliseconds: number): Promise<void>
```

```
async function statusbarGetText(
  title: string,
  options: { text?: string; part?: number; bufSize?: number }
): Promise<string>
```

```
async function statusbarGetTextByHandle(
  wnd: number,
  options: { part?: number; bufSize?: number }
): Promise<string>
```

```
async function toolTip(
  tip: string,
  options: { x?: number; y?: number }
): Promise<void>
```

```
async function winActivate(
  title: string,
  options: { text?: string }
): Promise<number>
```

```
async function winActivateByHandle(wnd: number): Promise<number>
```

```
async function winActive(
  title: string,
  options: { text?: string }
): Promise<number>
```

```
async function winActiveByHandle(wnd: number): Promise<number>
```

```
async function winClose(
  title: string,
  options: { text?: string }
): Promise<number>
```

```
async function winCloseByHandle(wnd: number): Promise<number>
```

```
async function winExists(
  title: string,
  options: { text?: string }
): Promise<number>
```

```
async function winExistsByHandle(wnd: number): Promise<number>
```

```
async function winGetCaretPos(): Promise<Position>
```

```
async function winGetClassList(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```
async function winGetClassListByHandle(
  wnd: number,
  options: { bufSize?: number }
): Promise<string>
```

```
async function winGetClientSize(
  title: string,
  options: { text?: string }
): Promise<Rect>
```

```
async function winGetClientSizeByHandle(wnd: number): Promise<Rect>
```

```
async function winGetHandle(
  title: string,
  options: { text?: string }
): Promise<number>
```

```
async function winGetHandleAsText(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```
async function winGetPos(
  title: string,
  options: { text?: string }
): Promise<Rect>
```

```
async function winGetPosByHandle(wnd: number): Promise<Rect>
```

```
async function winGetProcess(
  title: string,
  options: { text?: string }
): Promise<number>
```

```
async function winGetProcessByHandle(wnd: number): Promise<number>
```

```
async function winGetState(
  title: string,
  options: { text?: string }
): Promise<number>
```

```
async function winGetStateByHandle(wnd: number): Promise<number>
```

```
async function winGetText(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```
async function winGetTextByHandle(
  wnd: number,
  options: { bufSize?: number }
): Promise<string>
```

```
async function winGetTitle(
  title: string,
  options: { text?: string; bufSize?: number }
): Promise<string>
```

```
async function winGetTitleByHandle(
  wnd: number,
  options: { bufSize?: number }
): Promise<string>
```

```
async function winKill(
  title: string,
  options: { text?: string }
): Promise<number>
```

```
async function winKillByHandle(wnd: number): Promise<number>
```

```
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

```
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

```
async function winMinimizeAll(): Promise<void>
```

```
async function winMinimizeAllUndo(): Promise<void>
```

```
async function winMove(
  title: string,
  x: number,
  y: number,
  options: { text?: string; width?: number; height?: number }
): Promise<number>
```

```
async function winMoveByHandle(
  wnd: number,
  x: number,
  y: number,
  options: { width?: number; height?: number }
): Promise<number>
```

```
async function winSetOnTop(
  title: string,
  flag: number,
  options: { text?: string }
): Promise<number>
```

```
async function winSetOnTopByHandle(
  wnd: number,
  flag: number
): Promise<number>
```

```
async function winSetState(
  title: string,
  flags: number,
  options: { text?: string }
): Promise<number>
```

```
async function winSetStateByHandle(
  wnd: number,
  flags: number
): Promise<number>
```

```
async function winSetTitle(
  title: string,
  newTitle: string,
  options: { text?: string }
): Promise<number>
```

```
async function winSetTitleByHandle(
  wnd: number,
  newTitle: string
): Promise<number>
```

```
async function winSetTrans(
  title: string,
  trans: number,
  options: { text?: string }
): Promise<number>
```

```
async function winSetTransByHandle(
  wnd: number,
  trans: number
): Promise<number>
```

```
async function winWait(
  title: string,
  options: { text?: string; timeout?: number }
): Promise<number>
```

```
async function winWaitByHandle(
  wnd: number,
  options: { timeout?: number }
): Promise<number>
```

```
async function winWaitActive(
  title: string,
  options: { text?: string; timeout?: number }
): Promise<number>
```

```
async function winWaitActiveByHandle(
  wnd: number,
  options: { timeout?: number }
): Promise<number>
```

```
async function winWaitClose(
  title: string,
  options: { text?: string; timeout?: number }
): Promise<number>
```

```
async function winWaitCloseByHandle(
  wnd: number,
  options: { timeout?: number }
): Promise<number>
```

```
async function winWaitNotActive(
  title: string,
  options: { text?: string; timeout?: number }
): Promise<number>
```

```
async function winWaitNotActiveByHandle(
  wnd: number,
  options: { timeout?: number }
): Promise<number>
```

```
async function postMessage(
  wnd: number,
  msg: number,
  options: { wParam?: number; lParam?: number }
): Promise<number>
```

```
async function sendMessage(
  wnd: number,
  msg: number,
  options: { wParam?: number; lParam?: number }
): Promise<number>
```
