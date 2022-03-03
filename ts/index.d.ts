import { Position, Rect } from "./extend";
export declare function init(): Promise<void>;
export declare function error(): Promise<number>;
export declare function autoItSetOption(option: string, value: number): Promise<number>;
export declare function clipGet(options?: {
    bufSize?: number;
}): Promise<string>;
export declare function clipPut(clip: string): Promise<void>;
export declare function controlClick(title: string, control: string, options?: {
    text?: string;
    button?: string;
    numClicks?: number;
    x?: number;
    y?: number;
}): Promise<number>;
export declare function controlClickByHandle(wnd: number, ctrl: number, options?: {
    button?: string;
    numClicks?: number;
    x?: number;
    y?: number;
}): Promise<number>;
export declare function controlCommand(title: string, control: string, command: string, options?: {
    text?: string;
    extra?: string;
    bufSize?: number;
}): Promise<string>;
export declare function controlCommandByHandle(wnd: number, ctrl: number, command: string, options?: {
    extra?: string;
    bufSize?: number;
}): Promise<string>;
export declare function controlListView(title: string, control: string, command: string, options?: {
    text?: string;
    extra1?: string;
    extra2?: string;
    bufSize?: number;
}): Promise<string>;
export declare function controlListViewByHandle(wnd: number, ctrl: number, command: string, options?: {
    extra1?: string;
    extra2?: string;
    bufSize?: number;
}): Promise<string>;
export declare function controlDisable(title: string, control: string, options?: {
    text?: string;
}): Promise<number>;
export declare function controlDisableByHandle(wnd: number, ctrl: number): Promise<number>;
export declare function controlEnable(title: string, control: string, options?: {
    text?: string;
}): Promise<number>;
export declare function controlEnableByHandle(wnd: number, ctrl: number): Promise<number>;
export declare function controlFocus(title: string, control: string, options?: {
    text?: string;
}): Promise<number>;
export declare function controlFocusByHandle(wnd: number, ctrl: number): Promise<number>;
export declare function controlGetFocus(title: string, options?: {
    text?: string;
    bufSize?: number;
}): Promise<string>;
export declare function controlGetFocusByHandle(wnd: number, options?: {
    bufSize?: number;
}): Promise<string>;
export declare function controlGetHandle(wnd: number, control: string): Promise<number>;
export declare function controlGetHandleAsText(title: string, control: string, options?: {
    text?: string;
    bufSize?: number;
}): Promise<string>;
export declare function controlGetPos(title: string, control: string, options?: {
    text?: string;
}): Promise<Rect>;
export declare function controlGetPosByHandle(wnd: number, ctrl: number): Promise<Rect>;
export declare function controlGetText(title: string, control: string, options?: {
    text?: string;
    bufSize?: number;
}): Promise<string>;
export declare function controlGetTextByHandle(wnd: number, ctrl: number, options?: {
    bufSize?: number;
}): Promise<string>;
export declare function controlHide(title: string, control: string, options?: {
    text?: string;
}): Promise<number>;
export declare function controlHideByHandle(wnd: number, ctrl: number): Promise<number>;
export declare function controlMove(title: string, control: string, x: number, y: number, options?: {
    text?: string;
    width?: number;
    height?: number;
}): Promise<number>;
export declare function controlMoveByHandle(wnd: number, ctrl: number, x: number, y: number, options?: {
    width?: number;
    height?: number;
}): Promise<number>;
export declare function controlSend(title: string, control: string, sendText: string, options?: {
    text?: string;
    mode?: number;
}): Promise<number>;
export declare function controlSendByHandle(wnd: number, ctrl: number, sendText: string, options?: {
    mode?: number;
}): Promise<number>;
export declare function controlSetText(title: string, control: string, controlText: string, options?: {
    text?: string;
}): Promise<number>;
export declare function controlSetTextByHandle(wnd: number, ctrl: number, controlText: string): Promise<number>;
export declare function controlShow(title: string, control: string, options?: {
    text?: string;
}): Promise<number>;
export declare function controlShowByHandle(wnd: number, ctrl: number): Promise<number>;
export declare function controlTreeView(title: string, control: string, command: string, options?: {
    text?: string;
    extra1?: string;
    extra2?: string;
    bufSize?: number;
}): Promise<string>;
export declare function controlTreeViewByHandle(wnd: number, ctrl: number, command: string, options?: {
    extra1?: string;
    extra2?: string;
    bufSize?: number;
}): Promise<string>;
export declare function driveMapAdd(device: string, share: string, flags: number, options?: {
    user?: string;
    pwd?: string;
    bufSize?: number;
}): Promise<string>;
export declare function driveMapDel(device: string): Promise<number>;
export declare function driveMapGet(device: string, options?: {
    bufSize?: number;
}): Promise<string>;
export declare function isAdmin(): Promise<number>;
export declare function mouseClick(options?: {
    button?: string;
    x?: number;
    y?: number;
    clicks?: number;
    speed?: number;
}): Promise<number>;
export declare function mouseClickDrag(button: string, x1: number, y1: number, x2: number, y2: number, options?: {
    speed?: number;
}): Promise<number>;
export declare function mouseDown(options?: {
    button?: string;
}): Promise<void>;
export declare function mouseGetCursor(): Promise<number>;
export declare function mouseGetPos(): Promise<Position>;
export declare function mouseMove(x: number, y: number, options?: {
    speed?: number;
}): Promise<number>;
export declare function mouseUp(options?: {
    button?: string;
}): Promise<void>;
export declare function mouseWheel(direction: string, clicks: number): Promise<void>;
export declare function opt(option: string, value: number): Promise<number>;
export declare function pixelChecksum(lpRect: Rect, options?: {
    step?: number;
}): Promise<number>;
export declare function pixelGetColor(x: number, y: number): Promise<number>;
export declare function pixelSearch(lpRect: Rect, color: number, options?: {
    variation?: number;
    step?: number;
}): Promise<Position>;
export declare function processClose(process: string): Promise<number>;
export declare function processExists(process: string): Promise<number>;
export declare function processSetPriority(process: string, priority: number): Promise<number>;
export declare function processWait(process: string, options?: {
    timeout?: number;
}): Promise<number>;
export declare function processWaitClose(process: string, options?: {
    timeout?: number;
}): Promise<number>;
export declare function run(program: string, options?: {
    dir?: string;
    showFlag?: number;
}): Promise<number>;
export declare function runWait(program: string, options?: {
    dir?: string;
    showFlag?: number;
}): Promise<number>;
export declare function runAs(user: string, domain: string, password: string, logonFlag: number, program: string, options?: {
    dir?: string;
    showFlag?: number;
}): Promise<number>;
export declare function runAsWait(user: string, domain: string, password: string, logonFlag: number, program: string, options?: {
    dir?: string;
    showFlag?: number;
}): Promise<number>;
export declare function send(sendText: string, options?: {
    mode?: number;
}): Promise<void>;
export declare function shutdown(flags: number): Promise<number>;
export declare function sleep(milliseconds: number): Promise<void>;
export declare function statusbarGetText(title: string, options?: {
    text?: string;
    part?: number;
    bufSize?: number;
}): Promise<string>;
export declare function statusbarGetTextByHandle(wnd: number, options?: {
    part?: number;
    bufSize?: number;
}): Promise<string>;
export declare function toolTip(tip: string, options?: {
    x?: number;
    y?: number;
}): Promise<void>;
export declare function winActivate(title: string, options?: {
    text?: string;
}): Promise<number>;
export declare function winActivateByHandle(wnd: number): Promise<number>;
export declare function winActive(title: string, options?: {
    text?: string;
}): Promise<number>;
export declare function winActiveByHandle(wnd: number): Promise<number>;
export declare function winClose(title: string, options?: {
    text?: string;
}): Promise<number>;
export declare function winCloseByHandle(wnd: number): Promise<number>;
export declare function winExists(title: string, options?: {
    text?: string;
}): Promise<number>;
export declare function winExistsByHandle(wnd: number): Promise<number>;
export declare function winGetCaretPos(): Promise<Position>;
export declare function winGetClassList(title: string, options?: {
    text?: string;
    bufSize?: number;
}): Promise<string>;
export declare function winGetClassListByHandle(wnd: number, options?: {
    bufSize?: number;
}): Promise<string>;
export declare function winGetClientSize(title: string, options?: {
    text?: string;
}): Promise<Rect>;
export declare function winGetClientSizeByHandle(wnd: number): Promise<Rect>;
export declare function winGetHandle(title: string, options?: {
    text?: string;
}): Promise<number>;
export declare function winGetHandleAsText(title: string, options?: {
    text?: string;
    bufSize?: number;
}): Promise<string>;
export declare function winGetPos(title: string, options?: {
    text?: string;
}): Promise<Rect>;
export declare function winGetPosByHandle(wnd: number): Promise<Rect>;
export declare function winGetProcess(title: string, options?: {
    text?: string;
}): Promise<number>;
export declare function winGetProcessByHandle(wnd: number): Promise<number>;
export declare function winGetState(title: string, options?: {
    text?: string;
}): Promise<number>;
export declare function winGetStateByHandle(wnd: number): Promise<number>;
export declare function winGetText(title: string, options?: {
    text?: string;
    bufSize?: number;
}): Promise<string>;
export declare function winGetTextByHandle(wnd: number, options?: {
    bufSize?: number;
}): Promise<string>;
export declare function winGetTitle(title: string, options?: {
    text?: string;
    bufSize?: number;
}): Promise<string>;
export declare function winGetTitleByHandle(wnd: number, options?: {
    bufSize?: number;
}): Promise<string>;
export declare function winKill(title: string, options?: {
    text?: string;
}): Promise<number>;
export declare function winKillByHandle(wnd: number): Promise<number>;
export declare function winMenuSelectItem(title: string, item1: string, options?: {
    text?: string;
    item2?: string;
    item3?: string;
    item4?: string;
    item5?: string;
    item6?: string;
    item7?: string;
    item8?: string;
}): Promise<number>;
export declare function winMenuSelectItemByHandle(wnd: number, item1: string, options?: {
    item2?: string;
    item3?: string;
    item4?: string;
    item5?: string;
    item6?: string;
    item7?: string;
    item8?: string;
}): Promise<number>;
export declare function winMinimizeAll(): Promise<void>;
export declare function winMinimizeAllUndo(): Promise<void>;
export declare function winMove(title: string, x: number, y: number, options?: {
    text?: string;
    width?: number;
    height?: number;
}): Promise<number>;
export declare function winMoveByHandle(wnd: number, x: number, y: number, options?: {
    width?: number;
    height?: number;
}): Promise<number>;
export declare function winSetOnTop(title: string, flag: number, options?: {
    text?: string;
}): Promise<number>;
export declare function winSetOnTopByHandle(wnd: number, flag: number): Promise<number>;
export declare function winSetState(title: string, flags: number, options?: {
    text?: string;
}): Promise<number>;
export declare function winSetStateByHandle(wnd: number, flags: number): Promise<number>;
export declare function winSetTitle(title: string, newTitle: string, options?: {
    text?: string;
}): Promise<number>;
export declare function winSetTitleByHandle(wnd: number, newTitle: string): Promise<number>;
export declare function winSetTrans(title: string, trans: number, options?: {
    text?: string;
}): Promise<number>;
export declare function winSetTransByHandle(wnd: number, trans: number): Promise<number>;
export declare function winWait(title: string, options?: {
    text?: string;
    timeout?: number;
}): Promise<number>;
export declare function winWaitByHandle(wnd: number, options?: {
    timeout?: number;
}): Promise<number>;
export declare function winWaitActive(title: string, options?: {
    text?: string;
    timeout?: number;
}): Promise<number>;
export declare function winWaitActiveByHandle(wnd: number, options?: {
    timeout?: number;
}): Promise<number>;
export declare function winWaitClose(title: string, options?: {
    text?: string;
    timeout?: number;
}): Promise<number>;
export declare function winWaitCloseByHandle(wnd: number, options?: {
    timeout?: number;
}): Promise<number>;
export declare function winWaitNotActive(title: string, options?: {
    text?: string;
    timeout?: number;
}): Promise<number>;
export declare function winWaitNotActiveByHandle(wnd: number, options?: {
    timeout?: number;
}): Promise<number>;
export declare function postMessage(wnd: number, msg: number, options?: {
    wParam?: number;
    lParam?: number;
}): Promise<number>;
export declare function sendMessage(wnd: number, msg: number, options?: {
    wParam?: number;
    lParam?: number;
}): Promise<number>;
