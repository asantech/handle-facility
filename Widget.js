"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelpHandler_1 = require("./HelpHandler");
function Widget(parentWidget, topic) {
    if (topic === void 0) { topic = -1; }
    var _parent = parentWidget;
}
Widget.prototype = HelpHandler_1.default.prototype;
/*
    Widget is a subclass of HelpHandler, since all user interface elements can have help associated with
    them. (We could have used a mixin-based implementation just as well.)
*/
exports.default = Widget;
