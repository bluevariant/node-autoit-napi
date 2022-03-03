export type Position = {
  x: number;
  y: number;
};

export type Rect = {
  top: number;
  right: number;
  bottom: number;
  left: number;
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
      top: result.top,
      right: result.right,
      bottom: result.bottom,
      left: result.left,
    };
  }

  return result;
}
