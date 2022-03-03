"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function cleanResult(result, targetType) {
    if (targetType === "Position") {
        return {
            x: result.x,
            y: result.y,
        };
    }
    if (targetType === "Rect") {
        return {
            x: result.left,
            y: result.top,
            width: result.right - result.left,
            height: result.bottom - result.top,
        };
    }
    return result;
}
exports.cleanResult = cleanResult;
var TitleBuilder = (function () {
    function TitleBuilder() {
        this.data = [];
    }
    TitleBuilder.prototype.class = function (value, caseless) {
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
        var title = "[" + this.data.join("; ") + "]";
        this.data = [];
        return title;
    };
    return TitleBuilder;
}());
exports.TitleBuilder = TitleBuilder;
function titleBuilder() {
    return new TitleBuilder();
}
exports.titleBuilder = titleBuilder;
exports.titbI = {
    get titb() {
        return titleBuilder();
    },
};
