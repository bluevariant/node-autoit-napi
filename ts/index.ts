/**
 * Auto generate file
 */
declare var require: any;

import { Position, Rect, cleanResult } from "./extend";

const autoit = require("../old.js");

export async function init(): Promise<void> {
  return new Promise<void>((rel, rej) => {
    autoit.Init.async((err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function error(): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.error.async((err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function autoItSetOption(
  option: string,
  value: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.AutoItSetOption.async(option, value, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function clipGet(
  options: { bufSize?: number } = {}
): Promise<string> {
  const { bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ClipGet.async(bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function clipPut(clip: string): Promise<void> {
  return new Promise<void>((rel, rej) => {
    autoit.ClipPut.async(clip, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function controlClick(
  title: string,
  control: string,
  options: {
    text?: string;
    button?: string;
    numClicks?: number;
    x?: number;
    y?: number;
  } = {}
): Promise<number> {
  const { text, button, numClicks, x, y } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlClick.async(
      title,
      text,
      control,
      button,
      numClicks,
      x,
      y,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function controlClickByHandle(
  wnd: number,
  ctrl: number,
  options: { button?: string; numClicks?: number; x?: number; y?: number } = {}
): Promise<number> {
  const { button, numClicks, x, y } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlClickByHandle.async(
      wnd,
      ctrl,
      button,
      numClicks,
      x,
      y,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function controlCommand(
  title: string,
  control: string,
  command: string,
  options: { text?: string; extra?: string; bufSize?: number } = {}
): Promise<string> {
  const { text, extra, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlCommand.async(
      title,
      text,
      control,
      command,
      extra,
      bufSize,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "string"));
      }
    );
  });
}

export async function controlCommandByHandle(
  wnd: number,
  ctrl: number,
  command: string,
  options: { extra?: string; bufSize?: number } = {}
): Promise<string> {
  const { extra, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlCommandByHandle.async(
      wnd,
      ctrl,
      command,
      extra,
      bufSize,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "string"));
      }
    );
  });
}

export async function controlListView(
  title: string,
  control: string,
  command: string,
  options: {
    text?: string;
    extra1?: string;
    extra2?: string;
    bufSize?: number;
  } = {}
): Promise<string> {
  const { text, extra1, extra2, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlListView.async(
      title,
      text,
      control,
      command,
      extra1,
      extra2,
      bufSize,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "string"));
      }
    );
  });
}

export async function controlListViewByHandle(
  wnd: number,
  ctrl: number,
  command: string,
  options: { extra1?: string; extra2?: string; bufSize?: number } = {}
): Promise<string> {
  const { extra1, extra2, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlListViewByHandle.async(
      wnd,
      ctrl,
      command,
      extra1,
      extra2,
      bufSize,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "string"));
      }
    );
  });
}

export async function controlDisable(
  title: string,
  control: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlDisable.async(title, text, control, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlDisableByHandle(
  wnd: number,
  ctrl: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ControlDisableByHandle.async(wnd, ctrl, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlEnable(
  title: string,
  control: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlEnable.async(title, text, control, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlEnableByHandle(
  wnd: number,
  ctrl: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ControlEnableByHandle.async(wnd, ctrl, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlFocus(
  title: string,
  control: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlFocus.async(title, text, control, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlFocusByHandle(
  wnd: number,
  ctrl: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ControlFocusByHandle.async(wnd, ctrl, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlGetFocus(
  title: string,
  options: { text?: string; bufSize?: number } = {}
): Promise<string> {
  const { text, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlGetFocus.async(title, text, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function controlGetFocusByHandle(
  wnd: number,
  options: { bufSize?: number } = {}
): Promise<string> {
  const { bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlGetFocusByHandle.async(wnd, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function controlGetHandle(
  wnd: number,
  control: string
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ControlGetHandle.async(wnd, control, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlGetHandleAsText(
  title: string,
  control: string,
  options: { text?: string; bufSize?: number } = {}
): Promise<string> {
  const { text, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlGetHandleAsText.async(
      title,
      text,
      control,
      bufSize,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "string"));
      }
    );
  });
}

export async function controlGetPos(
  title: string,
  control: string,
  options: { text?: string } = {}
): Promise<Rect> {
  const { text } = options;

  return new Promise<Rect>((rel, rej) => {
    autoit.ControlGetPos.async(title, text, control, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "Rect"));
    });
  });
}

export async function controlGetPosByHandle(
  wnd: number,
  ctrl: number
): Promise<Rect> {
  return new Promise<Rect>((rel, rej) => {
    autoit.ControlGetPosByHandle.async(wnd, ctrl, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "Rect"));
    });
  });
}

export async function controlGetText(
  title: string,
  control: string,
  options: { text?: string; bufSize?: number } = {}
): Promise<string> {
  const { text, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlGetText.async(
      title,
      text,
      control,
      bufSize,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "string"));
      }
    );
  });
}

export async function controlGetTextByHandle(
  wnd: number,
  ctrl: number,
  options: { bufSize?: number } = {}
): Promise<string> {
  const { bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlGetTextByHandle.async(wnd, ctrl, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function controlHide(
  title: string,
  control: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlHide.async(title, text, control, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlHideByHandle(
  wnd: number,
  ctrl: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ControlHideByHandle.async(wnd, ctrl, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlMove(
  title: string,
  control: string,
  x: number,
  y: number,
  options: { text?: string; width?: number; height?: number } = {}
): Promise<number> {
  const { text, width, height } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlMove.async(
      title,
      text,
      control,
      x,
      y,
      width,
      height,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function controlMoveByHandle(
  wnd: number,
  ctrl: number,
  x: number,
  y: number,
  options: { width?: number; height?: number } = {}
): Promise<number> {
  const { width, height } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlMoveByHandle.async(
      wnd,
      ctrl,
      x,
      y,
      width,
      height,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function controlSend(
  title: string,
  control: string,
  sendText: string,
  options: { text?: string; mode?: number } = {}
): Promise<number> {
  const { text, mode } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlSend.async(
      title,
      text,
      control,
      sendText,
      mode,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function controlSendByHandle(
  wnd: number,
  ctrl: number,
  sendText: string,
  options: { mode?: number } = {}
): Promise<number> {
  const { mode } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlSendByHandle.async(
      wnd,
      ctrl,
      sendText,
      mode,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function controlSetText(
  title: string,
  control: string,
  controlText: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlSetText.async(
      title,
      text,
      control,
      controlText,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function controlSetTextByHandle(
  wnd: number,
  ctrl: number,
  controlText: string
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ControlSetTextByHandle.async(
      wnd,
      ctrl,
      controlText,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function controlShow(
  title: string,
  control: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ControlShow.async(title, text, control, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlShowByHandle(
  wnd: number,
  ctrl: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ControlShowByHandle.async(wnd, ctrl, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function controlTreeView(
  title: string,
  control: string,
  command: string,
  options: {
    text?: string;
    extra1?: string;
    extra2?: string;
    bufSize?: number;
  } = {}
): Promise<string> {
  const { text, extra1, extra2, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlTreeView.async(
      title,
      text,
      control,
      command,
      extra1,
      extra2,
      bufSize,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "string"));
      }
    );
  });
}

export async function controlTreeViewByHandle(
  wnd: number,
  ctrl: number,
  command: string,
  options: { extra1?: string; extra2?: string; bufSize?: number } = {}
): Promise<string> {
  const { extra1, extra2, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.ControlTreeViewByHandle.async(
      wnd,
      ctrl,
      command,
      extra1,
      extra2,
      bufSize,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "string"));
      }
    );
  });
}

export async function driveMapAdd(
  device: string,
  share: string,
  flags: number,
  options: { user?: string; pwd?: string; bufSize?: number } = {}
): Promise<string> {
  const { user, pwd, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.DriveMapAdd.async(
      device,
      share,
      flags,
      user,
      pwd,
      bufSize,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "string"));
      }
    );
  });
}

export async function driveMapDel(device: string): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.DriveMapDel.async(device, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function driveMapGet(
  device: string,
  options: { bufSize?: number } = {}
): Promise<string> {
  const { bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.DriveMapGet.async(device, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function isAdmin(): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.IsAdmin.async((err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function mouseClick(
  options: {
    button?: string;
    x?: number;
    y?: number;
    clicks?: number;
    speed?: number;
  } = {}
): Promise<number> {
  const { button, x, y, clicks, speed } = options;

  return new Promise<number>((rel, rej) => {
    autoit.MouseClick.async(button, x, y, clicks, speed, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function mouseClickDrag(
  button: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  options: { speed?: number } = {}
): Promise<number> {
  const { speed } = options;

  return new Promise<number>((rel, rej) => {
    autoit.MouseClickDrag.async(
      button,
      x1,
      y1,
      x2,
      y2,
      speed,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function mouseDown(
  options: { button?: string } = {}
): Promise<void> {
  const { button } = options;

  return new Promise<void>((rel, rej) => {
    autoit.MouseDown.async(button, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function mouseGetCursor(): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.MouseGetCursor.async((err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function mouseGetPos(): Promise<Position> {
  return new Promise<Position>((rel, rej) => {
    autoit.MouseGetPos.async((err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "Position"));
    });
  });
}

export async function mouseMove(
  x: number,
  y: number,
  options: { speed?: number } = {}
): Promise<number> {
  const { speed } = options;

  return new Promise<number>((rel, rej) => {
    autoit.MouseMove.async(x, y, speed, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function mouseUp(
  options: { button?: string } = {}
): Promise<void> {
  const { button } = options;

  return new Promise<void>((rel, rej) => {
    autoit.MouseUp.async(button, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function mouseWheel(
  direction: string,
  clicks: number
): Promise<void> {
  return new Promise<void>((rel, rej) => {
    autoit.MouseWheel.async(direction, clicks, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function opt(option: string, value: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.Opt.async(option, value, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function pixelChecksum(
  lpRect: Rect,
  options: { step?: number } = {}
): Promise<number> {
  const { step } = options;

  return new Promise<number>((rel, rej) => {
    autoit.PixelChecksum.async(lpRect, step, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function pixelGetColor(x: number, y: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.PixelGetColor.async(x, y, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function pixelSearch(
  lpRect: Rect,
  color: number,
  options: { variation?: number; step?: number } = {}
): Promise<Position> {
  const { variation, step } = options;

  return new Promise<Position>((rel, rej) => {
    autoit.PixelSearch.async(lpRect, color, variation, step, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "Position"));
    });
  });
}

export async function processClose(process: string): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ProcessClose.async(process, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function processExists(process: string): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ProcessExists.async(process, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function processSetPriority(
  process: string,
  priority: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.ProcessSetPriority.async(process, priority, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function processWait(
  process: string,
  options: { timeout?: number } = {}
): Promise<number> {
  const { timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ProcessWait.async(process, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function processWaitClose(
  process: string,
  options: { timeout?: number } = {}
): Promise<number> {
  const { timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.ProcessWaitClose.async(process, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function run(
  program: string,
  options: { dir?: string; showFlag?: number } = {}
): Promise<number> {
  const { dir, showFlag } = options;

  return new Promise<number>((rel, rej) => {
    autoit.Run.async(program, dir, showFlag, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function runWait(
  program: string,
  options: { dir?: string; showFlag?: number } = {}
): Promise<number> {
  const { dir, showFlag } = options;

  return new Promise<number>((rel, rej) => {
    autoit.RunWait.async(program, dir, showFlag, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function runAs(
  user: string,
  domain: string,
  password: string,
  logonFlag: number,
  program: string,
  options: { dir?: string; showFlag?: number } = {}
): Promise<number> {
  const { dir, showFlag } = options;

  return new Promise<number>((rel, rej) => {
    autoit.RunAs.async(
      user,
      domain,
      password,
      logonFlag,
      program,
      dir,
      showFlag,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function runAsWait(
  user: string,
  domain: string,
  password: string,
  logonFlag: number,
  program: string,
  options: { dir?: string; showFlag?: number } = {}
): Promise<number> {
  const { dir, showFlag } = options;

  return new Promise<number>((rel, rej) => {
    autoit.RunAsWait.async(
      user,
      domain,
      password,
      logonFlag,
      program,
      dir,
      showFlag,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function send(
  sendText: string,
  options: { mode?: number } = {}
): Promise<void> {
  const { mode } = options;

  return new Promise<void>((rel, rej) => {
    autoit.Send.async(sendText, mode, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function shutdown(flags: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.Shutdown.async(flags, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function sleep(milliseconds: number): Promise<void> {
  return new Promise<void>((rel, rej) => {
    autoit.Sleep.async(milliseconds, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function statusbarGetText(
  title: string,
  options: { text?: string; part?: number; bufSize?: number } = {}
): Promise<string> {
  const { text, part, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.StatusbarGetText.async(title, text, part, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function statusbarGetTextByHandle(
  wnd: number,
  options: { part?: number; bufSize?: number } = {}
): Promise<string> {
  const { part, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.StatusbarGetTextByHandle.async(wnd, part, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function toolTip(
  tip: string,
  options: { x?: number; y?: number } = {}
): Promise<void> {
  const { x, y } = options;

  return new Promise<void>((rel, rej) => {
    autoit.ToolTip.async(tip, x, y, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function winActivate(
  title: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinActivate.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winActivateByHandle(wnd: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinActivateByHandle.async(wnd, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winActive(
  title: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinActive.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winActiveByHandle(wnd: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinActiveByHandle.async(wnd, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winClose(
  title: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinClose.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winCloseByHandle(wnd: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinCloseByHandle.async(wnd, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winExists(
  title: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinExists.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winExistsByHandle(wnd: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinExistsByHandle.async(wnd, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winGetCaretPos(): Promise<Position> {
  return new Promise<Position>((rel, rej) => {
    autoit.WinGetCaretPos.async((err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "Position"));
    });
  });
}

export async function winGetClassList(
  title: string,
  options: { text?: string; bufSize?: number } = {}
): Promise<string> {
  const { text, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.WinGetClassList.async(title, text, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function winGetClassListByHandle(
  wnd: number,
  options: { bufSize?: number } = {}
): Promise<string> {
  const { bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.WinGetClassListByHandle.async(wnd, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function winGetClientSize(
  title: string,
  options: { text?: string } = {}
): Promise<Rect> {
  const { text } = options;

  return new Promise<Rect>((rel, rej) => {
    autoit.WinGetClientSize.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "Rect"));
    });
  });
}

export async function winGetClientSizeByHandle(wnd: number): Promise<Rect> {
  return new Promise<Rect>((rel, rej) => {
    autoit.WinGetClientSizeByHandle.async(wnd, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "Rect"));
    });
  });
}

export async function winGetHandle(
  title: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinGetHandle.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winGetHandleAsText(
  title: string,
  options: { text?: string; bufSize?: number } = {}
): Promise<string> {
  const { text, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.WinGetHandleAsText.async(title, text, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function winGetPos(
  title: string,
  options: { text?: string } = {}
): Promise<Rect> {
  const { text } = options;

  return new Promise<Rect>((rel, rej) => {
    autoit.WinGetPos.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "Rect"));
    });
  });
}

export async function winGetPosByHandle(wnd: number): Promise<Rect> {
  return new Promise<Rect>((rel, rej) => {
    autoit.WinGetPosByHandle.async(wnd, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "Rect"));
    });
  });
}

export async function winGetProcess(
  title: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinGetProcess.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winGetProcessByHandle(wnd: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinGetProcessByHandle.async(wnd, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winGetState(
  title: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinGetState.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winGetStateByHandle(wnd: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinGetStateByHandle.async(wnd, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winGetText(
  title: string,
  options: { text?: string; bufSize?: number } = {}
): Promise<string> {
  const { text, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.WinGetText.async(title, text, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function winGetTextByHandle(
  wnd: number,
  options: { bufSize?: number } = {}
): Promise<string> {
  const { bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.WinGetTextByHandle.async(wnd, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function winGetTitle(
  title: string,
  options: { text?: string; bufSize?: number } = {}
): Promise<string> {
  const { text, bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.WinGetTitle.async(title, text, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function winGetTitleByHandle(
  wnd: number,
  options: { bufSize?: number } = {}
): Promise<string> {
  const { bufSize } = options;

  return new Promise<string>((rel, rej) => {
    autoit.WinGetTitleByHandle.async(wnd, bufSize, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "string"));
    });
  });
}

export async function winKill(
  title: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinKill.async(title, text, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winKillByHandle(wnd: number): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinKillByHandle.async(wnd, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winMenuSelectItem(
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
  } = {}
): Promise<number> {
  const { text, item2, item3, item4, item5, item6, item7, item8 } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinMenuSelectItem.async(
      title,
      text,
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function winMenuSelectItemByHandle(
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
  } = {}
): Promise<number> {
  const { item2, item3, item4, item5, item6, item7, item8 } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinMenuSelectItemByHandle.async(
      wnd,
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      (err, result) => {
        if (err) rej(err);
        else rel(cleanResult(result, "number"));
      }
    );
  });
}

export async function winMinimizeAll(): Promise<void> {
  return new Promise<void>((rel, rej) => {
    autoit.WinMinimizeAll.async((err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function winMinimizeAllUndo(): Promise<void> {
  return new Promise<void>((rel, rej) => {
    autoit.WinMinimizeAllUndo.async((err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "void"));
    });
  });
}

export async function winMove(
  title: string,
  x: number,
  y: number,
  options: { text?: string; width?: number; height?: number } = {}
): Promise<number> {
  const { text, width, height } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinMove.async(title, text, x, y, width, height, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winMoveByHandle(
  wnd: number,
  x: number,
  y: number,
  options: { width?: number; height?: number } = {}
): Promise<number> {
  const { width, height } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinMoveByHandle.async(wnd, x, y, width, height, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winSetOnTop(
  title: string,
  flag: number,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinSetOnTop.async(title, text, flag, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winSetOnTopByHandle(
  wnd: number,
  flag: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinSetOnTopByHandle.async(wnd, flag, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winSetState(
  title: string,
  flags: number,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinSetState.async(title, text, flags, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winSetStateByHandle(
  wnd: number,
  flags: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinSetStateByHandle.async(wnd, flags, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winSetTitle(
  title: string,
  newTitle: string,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinSetTitle.async(title, text, newTitle, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winSetTitleByHandle(
  wnd: number,
  newTitle: string
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinSetTitleByHandle.async(wnd, newTitle, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winSetTrans(
  title: string,
  trans: number,
  options: { text?: string } = {}
): Promise<number> {
  const { text } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinSetTrans.async(title, text, trans, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winSetTransByHandle(
  wnd: number,
  trans: number
): Promise<number> {
  return new Promise<number>((rel, rej) => {
    autoit.WinSetTransByHandle.async(wnd, trans, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winWait(
  title: string,
  options: { text?: string; timeout?: number } = {}
): Promise<number> {
  const { text, timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinWait.async(title, text, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winWaitByHandle(
  wnd: number,
  options: { timeout?: number } = {}
): Promise<number> {
  const { timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinWaitByHandle.async(wnd, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winWaitActive(
  title: string,
  options: { text?: string; timeout?: number } = {}
): Promise<number> {
  const { text, timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinWaitActive.async(title, text, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winWaitActiveByHandle(
  wnd: number,
  options: { timeout?: number } = {}
): Promise<number> {
  const { timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinWaitActiveByHandle.async(wnd, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winWaitClose(
  title: string,
  options: { text?: string; timeout?: number } = {}
): Promise<number> {
  const { text, timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinWaitClose.async(title, text, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winWaitCloseByHandle(
  wnd: number,
  options: { timeout?: number } = {}
): Promise<number> {
  const { timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinWaitCloseByHandle.async(wnd, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winWaitNotActive(
  title: string,
  options: { text?: string; timeout?: number } = {}
): Promise<number> {
  const { text, timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinWaitNotActive.async(title, text, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function winWaitNotActiveByHandle(
  wnd: number,
  options: { timeout?: number } = {}
): Promise<number> {
  const { timeout } = options;

  return new Promise<number>((rel, rej) => {
    autoit.WinWaitNotActiveByHandle.async(wnd, timeout, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function postMessage(
  wnd: number,
  msg: number,
  options: { wParam?: number; lParam?: number } = {}
): Promise<number> {
  const { wParam, lParam } = options;

  return new Promise<number>((rel, rej) => {
    autoit.PostMessage.async(wnd, msg, wParam, lParam, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}

export async function sendMessage(
  wnd: number,
  msg: number,
  options: { wParam?: number; lParam?: number } = {}
): Promise<number> {
  const { wParam, lParam } = options;

  return new Promise<number>((rel, rej) => {
    autoit.SendMessage.async(wnd, msg, wParam, lParam, (err, result) => {
      if (err) rej(err);
      else rel(cleanResult(result, "number"));
    });
  });
}