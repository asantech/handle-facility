"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NO_HELP_TOPIC = -1;
function HelpHandler() {
    /*
        1. each object on the chain shares a common interface for handling requests and for accessing its
           successor on the chain
      */
    var _successor;
    var _topic;
    this.setHandler = function (HelpHandler, topic) {
        _successor = HelpHandler;
        _topic = topic;
    };
    this.hasHelp = function () {
        return _topic != NO_HELP_TOPIC;
    };
    this.handleHelp = function (HelpHandler, topic) {
        if (HelpHandler === void 0) { HelpHandler = 0; }
        if (topic === void 0) { topic = NO_HELP_TOPIC; }
        /*
            1. HelpHandler's HandleHelp operation forwards the request to the
            successor by default.
            2. Subclasses can override this operation to provide help under
            the right circumstances; otherwise they can use the default implementation to
            forward the request
           */
        if (_successor) {
            _successor.handleHelp();
        }
    };
}
exports.default = HelpHandler;
