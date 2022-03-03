"use strict";
exports.__esModule = true;
function cleanResult(result, targetType) {
    if (targetType === "Position") {
        return {
            x: result.x,
            y: result.y
        };
    }
    if (targetType === "Rect") {
        return {
            top: result.top,
            right: result.right,
            bottom: result.bottom,
            left: result.left
        };
    }
    return result;
}
exports.cleanResult = cleanResult;
