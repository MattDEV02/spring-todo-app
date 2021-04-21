"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("./config");
const controller = express_1.Router();
const defaultResponse = (res) => res.sendFile(config_1.filesData.file, config_1.filesData.options);
controller
    .all('/', (req, res) => defaultResponse(res))
    .all('/form', (req, res) => defaultResponse(res))
    .all('/calendar', (req, res) => defaultResponse(res))
    .all('/chart', (req, res) => defaultResponse(res))
    .all('*', (req, res) => res
    .status(404)
    .redirect('/'));
exports.default = controller;
//# sourceMappingURL=web.js.map