"use strict";
exports.__esModule = true;
var _ = require("lodash");
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
var TitleBuilder = (function () {
    function TitleBuilder() {
        this.data = [];
    }
    TitleBuilder.prototype["class"] = function (value, caseless) {
        return this.some("CLASS", value, caseless);
    };
    TitleBuilder.prototype.title = function (title, caseless) {
        return this.some("TITLE", title, caseless);
    };
    TitleBuilder.prototype.some = function (id, some, caseless) {
        var _this = this;
        if (typeof some === "string") {
            if (caseless) {
                this.data.push("REGEXP" + id + ":(?i)^" + _.escapeRegExp(some) + "(.*)$");
            }
            else {
                this.data.push(id + ":" + some);
            }
        }
        else {
            _.forEach(some, function (v, k) {
                v = _.escapeRegExp(v);
                switch (k) {
                    case "contains":
                        _this.data.push("REGEXP" + id + ":" + (caseless ? "(?i)" : "") + "^(.*)" + v + "(.*)$");
                        break;
                    case "startsWith":
                        _this.data.push("REGEXP" + id + ":" + (caseless ? "(?i)" : "") + "^" + v + "(.*)$");
                        break;
                    case "endsWith":
                        _this.data.push("REGEXP" + id + ":" + (caseless ? "(?i)" : "") + "^(.*)" + v + "$");
                        break;
                }
            });
        }
        return this;
    };
    TitleBuilder.prototype.last = function () {
        this.data.push("LAST");
        return this;
    };
    TitleBuilder.prototype.active = function () {
        this.data.push("ACTIVE");
        return this;
    };
    TitleBuilder.prototype.instance = function (instance) {
        this.data.push("INSTANCE:" + instance);
        return this;
    };
    TitleBuilder.prototype.build = function () {
        return "[" + this.data.join("; ") + "]";
    };
    return TitleBuilder;
}());
exports.TitleBuilder = TitleBuilder;
function titleBuilder() {
    return new TitleBuilder();
}
exports.titleBuilder = titleBuilder;