"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrintBtn_1 = require("./concreteHandlers/PrintBtn");
var OkBtn_1 = require("./concreteHandlers/OkBtn");
var PrintDialog_1 = require("./concreteHandlers/PrintDialog");
var SaveDialog_1 = require("./concreteHandlers/SaveDialog");
/*
1. an object in the chain doesn't have to know about the chain's structure
2. Chain of Responsibility gives you added flexibility in distributing responsibilities among objects
   You can add or change responsibilities for handling a request by adding
   to or otherwise changing the chain at run-time. You can combine this with
   subclassing to specialize handlers statically
*/
/*successor chain */
var links = {
    body: {
        PrintBtn: PrintBtn_1.default,
        PrintDialog: PrintDialog_1.default,
        SaveDialog: SaveDialog_1.default,
    },
    navbar: {
        PrintBtn: PrintBtn_1.default,
    },
    main: {
        article: {
            PrintBtn: PrintBtn_1.default,
            OkBtn: OkBtn_1.default,
        },
    },
};
/*
  1. the set of objects that can handle a request should be specified dynamically.
  2. Instead of objects maintaining references to all candidate receivers, they
     keep a single reference to their successor
*/
exports.default = links;
