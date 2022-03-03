"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var extend_1 = require("./extend");
var autoit = require("../old.js");
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.Init.async(function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.init = init;
function error() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.error.async(function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.error = error;
function autoItSetOption(option, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.AutoItSetOption.async(option, value, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.autoItSetOption = autoItSetOption;
function clipGet(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var bufSize;
        return __generator(this, function (_a) {
            bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ClipGet.async(bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.clipGet = clipGet;
function clipPut(clip) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ClipPut.async(clip, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.clipPut = clipPut;
function controlClick(title, control, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, button, numClicks, x, y;
        return __generator(this, function (_a) {
            text = options.text, button = options.button, numClicks = options.numClicks, x = options.x, y = options.y;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlClick.async(title, text, control, button, numClicks, x, y, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlClick = controlClick;
function controlClickByHandle(wnd, ctrl, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var button, numClicks, x, y;
        return __generator(this, function (_a) {
            button = options.button, numClicks = options.numClicks, x = options.x, y = options.y;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlClickByHandle.async(wnd, ctrl, button, numClicks, x, y, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlClickByHandle = controlClickByHandle;
function controlCommand(title, control, command, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, extra, bufSize;
        return __generator(this, function (_a) {
            text = options.text, extra = options.extra, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlCommand.async(title, text, control, command, extra, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlCommand = controlCommand;
function controlCommandByHandle(wnd, ctrl, command, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var extra, bufSize;
        return __generator(this, function (_a) {
            extra = options.extra, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlCommandByHandle.async(wnd, ctrl, command, extra, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlCommandByHandle = controlCommandByHandle;
function controlListView(title, control, command, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, extra1, extra2, bufSize;
        return __generator(this, function (_a) {
            text = options.text, extra1 = options.extra1, extra2 = options.extra2, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlListView.async(title, text, control, command, extra1, extra2, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlListView = controlListView;
function controlListViewByHandle(wnd, ctrl, command, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var extra1, extra2, bufSize;
        return __generator(this, function (_a) {
            extra1 = options.extra1, extra2 = options.extra2, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlListViewByHandle.async(wnd, ctrl, command, extra1, extra2, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlListViewByHandle = controlListViewByHandle;
function controlDisable(title, control, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlDisable.async(title, text, control, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlDisable = controlDisable;
function controlDisableByHandle(wnd, ctrl) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlDisableByHandle.async(wnd, ctrl, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlDisableByHandle = controlDisableByHandle;
function controlEnable(title, control, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlEnable.async(title, text, control, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlEnable = controlEnable;
function controlEnableByHandle(wnd, ctrl) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlEnableByHandle.async(wnd, ctrl, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlEnableByHandle = controlEnableByHandle;
function controlFocus(title, control, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlFocus.async(title, text, control, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlFocus = controlFocus;
function controlFocusByHandle(wnd, ctrl) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlFocusByHandle.async(wnd, ctrl, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlFocusByHandle = controlFocusByHandle;
function controlGetFocus(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, bufSize;
        return __generator(this, function (_a) {
            text = options.text, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlGetFocus.async(title, text, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlGetFocus = controlGetFocus;
function controlGetFocusByHandle(wnd, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var bufSize;
        return __generator(this, function (_a) {
            bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlGetFocusByHandle.async(wnd, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlGetFocusByHandle = controlGetFocusByHandle;
function controlGetHandle(wnd, control) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlGetHandle.async(wnd, control, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlGetHandle = controlGetHandle;
function controlGetHandleAsText(title, control, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, bufSize;
        return __generator(this, function (_a) {
            text = options.text, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlGetHandleAsText.async(title, text, control, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlGetHandleAsText = controlGetHandleAsText;
function controlGetPos(title, control, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlGetPos.async(title, text, control, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "Rect"));
                    });
                })];
        });
    });
}
exports.controlGetPos = controlGetPos;
function controlGetPosByHandle(wnd, ctrl) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlGetPosByHandle.async(wnd, ctrl, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "Rect"));
                    });
                })];
        });
    });
}
exports.controlGetPosByHandle = controlGetPosByHandle;
function controlGetText(title, control, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, bufSize;
        return __generator(this, function (_a) {
            text = options.text, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlGetText.async(title, text, control, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlGetText = controlGetText;
function controlGetTextByHandle(wnd, ctrl, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var bufSize;
        return __generator(this, function (_a) {
            bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlGetTextByHandle.async(wnd, ctrl, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlGetTextByHandle = controlGetTextByHandle;
function controlHide(title, control, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlHide.async(title, text, control, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlHide = controlHide;
function controlHideByHandle(wnd, ctrl) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlHideByHandle.async(wnd, ctrl, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlHideByHandle = controlHideByHandle;
function controlMove(title, control, x, y, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, width, height;
        return __generator(this, function (_a) {
            text = options.text, width = options.width, height = options.height;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlMove.async(title, text, control, x, y, width, height, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlMove = controlMove;
function controlMoveByHandle(wnd, ctrl, x, y, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var width, height;
        return __generator(this, function (_a) {
            width = options.width, height = options.height;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlMoveByHandle.async(wnd, ctrl, x, y, width, height, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlMoveByHandle = controlMoveByHandle;
function controlSend(title, control, sendText, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, mode;
        return __generator(this, function (_a) {
            text = options.text, mode = options.mode;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlSend.async(title, text, control, sendText, mode, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlSend = controlSend;
function controlSendByHandle(wnd, ctrl, sendText, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var mode;
        return __generator(this, function (_a) {
            mode = options.mode;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlSendByHandle.async(wnd, ctrl, sendText, mode, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlSendByHandle = controlSendByHandle;
function controlSetText(title, control, controlText, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlSetText.async(title, text, control, controlText, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlSetText = controlSetText;
function controlSetTextByHandle(wnd, ctrl, controlText) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlSetTextByHandle.async(wnd, ctrl, controlText, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlSetTextByHandle = controlSetTextByHandle;
function controlShow(title, control, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlShow.async(title, text, control, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlShow = controlShow;
function controlShowByHandle(wnd, ctrl) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlShowByHandle.async(wnd, ctrl, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.controlShowByHandle = controlShowByHandle;
function controlTreeView(title, control, command, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, extra1, extra2, bufSize;
        return __generator(this, function (_a) {
            text = options.text, extra1 = options.extra1, extra2 = options.extra2, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlTreeView.async(title, text, control, command, extra1, extra2, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlTreeView = controlTreeView;
function controlTreeViewByHandle(wnd, ctrl, command, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var extra1, extra2, bufSize;
        return __generator(this, function (_a) {
            extra1 = options.extra1, extra2 = options.extra2, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ControlTreeViewByHandle.async(wnd, ctrl, command, extra1, extra2, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.controlTreeViewByHandle = controlTreeViewByHandle;
function driveMapAdd(device, share, flags, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var user, pwd, bufSize;
        return __generator(this, function (_a) {
            user = options.user, pwd = options.pwd, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.DriveMapAdd.async(device, share, flags, user, pwd, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.driveMapAdd = driveMapAdd;
function driveMapDel(device) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.DriveMapDel.async(device, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.driveMapDel = driveMapDel;
function driveMapGet(device, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var bufSize;
        return __generator(this, function (_a) {
            bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.DriveMapGet.async(device, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.driveMapGet = driveMapGet;
function isAdmin() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.IsAdmin.async(function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.isAdmin = isAdmin;
function mouseClick(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var button, x, y, clicks, speed;
        return __generator(this, function (_a) {
            button = options.button, x = options.x, y = options.y, clicks = options.clicks, speed = options.speed;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.MouseClick.async(button, x, y, clicks, speed, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.mouseClick = mouseClick;
function mouseClickDrag(button, x1, y1, x2, y2, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var speed;
        return __generator(this, function (_a) {
            speed = options.speed;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.MouseClickDrag.async(button, x1, y1, x2, y2, speed, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.mouseClickDrag = mouseClickDrag;
function mouseDown(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var button;
        return __generator(this, function (_a) {
            button = options.button;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.MouseDown.async(button, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.mouseDown = mouseDown;
function mouseGetCursor() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.MouseGetCursor.async(function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.mouseGetCursor = mouseGetCursor;
function mouseGetPos() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.MouseGetPos.async(function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "Position"));
                    });
                })];
        });
    });
}
exports.mouseGetPos = mouseGetPos;
function mouseMove(x, y, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var speed;
        return __generator(this, function (_a) {
            speed = options.speed;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.MouseMove.async(x, y, speed, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.mouseMove = mouseMove;
function mouseUp(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var button;
        return __generator(this, function (_a) {
            button = options.button;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.MouseUp.async(button, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.mouseUp = mouseUp;
function mouseWheel(direction, clicks) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.MouseWheel.async(direction, clicks, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.mouseWheel = mouseWheel;
function opt(option, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.Opt.async(option, value, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.opt = opt;
function pixelChecksum(lpRect, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var step;
        return __generator(this, function (_a) {
            step = options.step;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.PixelChecksum.async(lpRect, step, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.pixelChecksum = pixelChecksum;
function pixelGetColor(x, y) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.PixelGetColor.async(x, y, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.pixelGetColor = pixelGetColor;
function pixelSearch(lpRect, color, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var variation, step;
        return __generator(this, function (_a) {
            variation = options.variation, step = options.step;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.PixelSearch.async(lpRect, color, variation, step, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "Position"));
                    });
                })];
        });
    });
}
exports.pixelSearch = pixelSearch;
function processClose(process) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ProcessClose.async(process, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.processClose = processClose;
function processExists(process) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ProcessExists.async(process, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.processExists = processExists;
function processSetPriority(process, priority) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ProcessSetPriority.async(process, priority, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.processSetPriority = processSetPriority;
function processWait(process, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var timeout;
        return __generator(this, function (_a) {
            timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ProcessWait.async(process, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.processWait = processWait;
function processWaitClose(process, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var timeout;
        return __generator(this, function (_a) {
            timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ProcessWaitClose.async(process, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.processWaitClose = processWaitClose;
function run(program, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var dir, showFlag;
        return __generator(this, function (_a) {
            dir = options.dir, showFlag = options.showFlag;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.Run.async(program, dir, showFlag, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.run = run;
function runWait(program, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var dir, showFlag;
        return __generator(this, function (_a) {
            dir = options.dir, showFlag = options.showFlag;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.RunWait.async(program, dir, showFlag, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.runWait = runWait;
function runAs(user, domain, password, logonFlag, program, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var dir, showFlag;
        return __generator(this, function (_a) {
            dir = options.dir, showFlag = options.showFlag;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.RunAs.async(user, domain, password, logonFlag, program, dir, showFlag, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.runAs = runAs;
function runAsWait(user, domain, password, logonFlag, program, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var dir, showFlag;
        return __generator(this, function (_a) {
            dir = options.dir, showFlag = options.showFlag;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.RunAsWait.async(user, domain, password, logonFlag, program, dir, showFlag, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.runAsWait = runAsWait;
function send(sendText, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var mode;
        return __generator(this, function (_a) {
            mode = options.mode;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.Send.async(sendText, mode, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.send = send;
function shutdown(flags) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.Shutdown.async(flags, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.shutdown = shutdown;
function sleep(milliseconds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.Sleep.async(milliseconds, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.sleep = sleep;
function statusbarGetText(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, part, bufSize;
        return __generator(this, function (_a) {
            text = options.text, part = options.part, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.StatusbarGetText.async(title, text, part, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.statusbarGetText = statusbarGetText;
function statusbarGetTextByHandle(wnd, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var part, bufSize;
        return __generator(this, function (_a) {
            part = options.part, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.StatusbarGetTextByHandle.async(wnd, part, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.statusbarGetTextByHandle = statusbarGetTextByHandle;
function toolTip(tip, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var x, y;
        return __generator(this, function (_a) {
            x = options.x, y = options.y;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.ToolTip.async(tip, x, y, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.toolTip = toolTip;
function winActivate(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinActivate.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winActivate = winActivate;
function winActivateByHandle(wnd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinActivateByHandle.async(wnd, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winActivateByHandle = winActivateByHandle;
function winActive(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinActive.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winActive = winActive;
function winActiveByHandle(wnd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinActiveByHandle.async(wnd, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winActiveByHandle = winActiveByHandle;
function winClose(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinClose.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winClose = winClose;
function winCloseByHandle(wnd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinCloseByHandle.async(wnd, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winCloseByHandle = winCloseByHandle;
function winExists(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinExists.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winExists = winExists;
function winExistsByHandle(wnd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinExistsByHandle.async(wnd, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winExistsByHandle = winExistsByHandle;
function winGetCaretPos() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetCaretPos.async(function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "Position"));
                    });
                })];
        });
    });
}
exports.winGetCaretPos = winGetCaretPos;
function winGetClassList(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, bufSize;
        return __generator(this, function (_a) {
            text = options.text, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetClassList.async(title, text, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.winGetClassList = winGetClassList;
function winGetClassListByHandle(wnd, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var bufSize;
        return __generator(this, function (_a) {
            bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetClassListByHandle.async(wnd, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.winGetClassListByHandle = winGetClassListByHandle;
function winGetClientSize(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetClientSize.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "Rect"));
                    });
                })];
        });
    });
}
exports.winGetClientSize = winGetClientSize;
function winGetClientSizeByHandle(wnd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetClientSizeByHandle.async(wnd, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "Rect"));
                    });
                })];
        });
    });
}
exports.winGetClientSizeByHandle = winGetClientSizeByHandle;
function winGetHandle(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetHandle.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winGetHandle = winGetHandle;
function winGetHandleAsText(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, bufSize;
        return __generator(this, function (_a) {
            text = options.text, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetHandleAsText.async(title, text, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.winGetHandleAsText = winGetHandleAsText;
function winGetPos(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetPos.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "Rect"));
                    });
                })];
        });
    });
}
exports.winGetPos = winGetPos;
function winGetPosByHandle(wnd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetPosByHandle.async(wnd, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "Rect"));
                    });
                })];
        });
    });
}
exports.winGetPosByHandle = winGetPosByHandle;
function winGetProcess(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetProcess.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winGetProcess = winGetProcess;
function winGetProcessByHandle(wnd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetProcessByHandle.async(wnd, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winGetProcessByHandle = winGetProcessByHandle;
function winGetState(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetState.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winGetState = winGetState;
function winGetStateByHandle(wnd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetStateByHandle.async(wnd, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winGetStateByHandle = winGetStateByHandle;
function winGetText(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, bufSize;
        return __generator(this, function (_a) {
            text = options.text, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetText.async(title, text, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.winGetText = winGetText;
function winGetTextByHandle(wnd, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var bufSize;
        return __generator(this, function (_a) {
            bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetTextByHandle.async(wnd, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.winGetTextByHandle = winGetTextByHandle;
function winGetTitle(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, bufSize;
        return __generator(this, function (_a) {
            text = options.text, bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetTitle.async(title, text, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.winGetTitle = winGetTitle;
function winGetTitleByHandle(wnd, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var bufSize;
        return __generator(this, function (_a) {
            bufSize = options.bufSize;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinGetTitleByHandle.async(wnd, bufSize, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "string"));
                    });
                })];
        });
    });
}
exports.winGetTitleByHandle = winGetTitleByHandle;
function winKill(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinKill.async(title, text, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winKill = winKill;
function winKillByHandle(wnd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinKillByHandle.async(wnd, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winKillByHandle = winKillByHandle;
function winMenuSelectItem(title, item1, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, item2, item3, item4, item5, item6, item7, item8;
        return __generator(this, function (_a) {
            text = options.text, item2 = options.item2, item3 = options.item3, item4 = options.item4, item5 = options.item5, item6 = options.item6, item7 = options.item7, item8 = options.item8;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinMenuSelectItem.async(title, text, item1, item2, item3, item4, item5, item6, item7, item8, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winMenuSelectItem = winMenuSelectItem;
function winMenuSelectItemByHandle(wnd, item1, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var item2, item3, item4, item5, item6, item7, item8;
        return __generator(this, function (_a) {
            item2 = options.item2, item3 = options.item3, item4 = options.item4, item5 = options.item5, item6 = options.item6, item7 = options.item7, item8 = options.item8;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinMenuSelectItemByHandle.async(wnd, item1, item2, item3, item4, item5, item6, item7, item8, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winMenuSelectItemByHandle = winMenuSelectItemByHandle;
function winMinimizeAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinMinimizeAll.async(function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.winMinimizeAll = winMinimizeAll;
function winMinimizeAllUndo() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinMinimizeAllUndo.async(function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "void"));
                    });
                })];
        });
    });
}
exports.winMinimizeAllUndo = winMinimizeAllUndo;
function winMove(title, x, y, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, width, height;
        return __generator(this, function (_a) {
            text = options.text, width = options.width, height = options.height;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinMove.async(title, text, x, y, width, height, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winMove = winMove;
function winMoveByHandle(wnd, x, y, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var width, height;
        return __generator(this, function (_a) {
            width = options.width, height = options.height;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinMoveByHandle.async(wnd, x, y, width, height, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winMoveByHandle = winMoveByHandle;
function winSetOnTop(title, flag, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinSetOnTop.async(title, text, flag, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winSetOnTop = winSetOnTop;
function winSetOnTopByHandle(wnd, flag) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinSetOnTopByHandle.async(wnd, flag, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winSetOnTopByHandle = winSetOnTopByHandle;
function winSetState(title, flags, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinSetState.async(title, text, flags, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winSetState = winSetState;
function winSetStateByHandle(wnd, flags) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinSetStateByHandle.async(wnd, flags, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winSetStateByHandle = winSetStateByHandle;
function winSetTitle(title, newTitle, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinSetTitle.async(title, text, newTitle, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winSetTitle = winSetTitle;
function winSetTitleByHandle(wnd, newTitle) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinSetTitleByHandle.async(wnd, newTitle, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winSetTitleByHandle = winSetTitleByHandle;
function winSetTrans(title, trans, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            text = options.text;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinSetTrans.async(title, text, trans, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winSetTrans = winSetTrans;
function winSetTransByHandle(wnd, trans) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinSetTransByHandle.async(wnd, trans, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winSetTransByHandle = winSetTransByHandle;
function winWait(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, timeout;
        return __generator(this, function (_a) {
            text = options.text, timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinWait.async(title, text, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winWait = winWait;
function winWaitByHandle(wnd, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var timeout;
        return __generator(this, function (_a) {
            timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinWaitByHandle.async(wnd, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winWaitByHandle = winWaitByHandle;
function winWaitActive(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, timeout;
        return __generator(this, function (_a) {
            text = options.text, timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinWaitActive.async(title, text, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winWaitActive = winWaitActive;
function winWaitActiveByHandle(wnd, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var timeout;
        return __generator(this, function (_a) {
            timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinWaitActiveByHandle.async(wnd, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winWaitActiveByHandle = winWaitActiveByHandle;
function winWaitClose(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, timeout;
        return __generator(this, function (_a) {
            text = options.text, timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinWaitClose.async(title, text, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winWaitClose = winWaitClose;
function winWaitCloseByHandle(wnd, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var timeout;
        return __generator(this, function (_a) {
            timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinWaitCloseByHandle.async(wnd, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winWaitCloseByHandle = winWaitCloseByHandle;
function winWaitNotActive(title, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var text, timeout;
        return __generator(this, function (_a) {
            text = options.text, timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinWaitNotActive.async(title, text, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winWaitNotActive = winWaitNotActive;
function winWaitNotActiveByHandle(wnd, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var timeout;
        return __generator(this, function (_a) {
            timeout = options.timeout;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.WinWaitNotActiveByHandle.async(wnd, timeout, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.winWaitNotActiveByHandle = winWaitNotActiveByHandle;
function postMessage(wnd, msg, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var wParam, lParam;
        return __generator(this, function (_a) {
            wParam = options.wParam, lParam = options.lParam;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.PostMessage.async(wnd, msg, wParam, lParam, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.postMessage = postMessage;
function sendMessage(wnd, msg, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var wParam, lParam;
        return __generator(this, function (_a) {
            wParam = options.wParam, lParam = options.lParam;
            return [2 /*return*/, new Promise(function (rel, rej) {
                    autoit.SendMessage.async(wnd, msg, wParam, lParam, function (err, result) {
                        if (err)
                            rej(err);
                        else
                            rel(extend_1.cleanResult(result, "number"));
                    });
                })];
        });
    });
}
exports.sendMessage = sendMessage;
