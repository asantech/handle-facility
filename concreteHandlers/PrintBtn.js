"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printBtn(context) {
    /*
      1. a "Client" initiates the req to a Handler object on the chain
         (because of request initiation, should the request be placed in the "Client", or can it be outside?)
      2. The client that issued the request has no direct reference to the object that ultimately fulfills it
  
    */
    var printReq = function () {
        console.log('print req: from ' + context + ' context');
    };
}
exports.default = printBtn;
