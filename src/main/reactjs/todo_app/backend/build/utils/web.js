"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("./config");
const controller = express_1.Router();
controller
    .all('/', (req, res) => res
    .sendFile(config_1.filesData.file, config_1.filesData.options))
    .all('/form', (req, res) => res
    .sendFile(config_1.filesData.file, config_1.filesData.options))
    .all('/calendar', (req, res) => res.
    sendFile(config_1.filesData.file, config_1.filesData.options))
    .all('*', (req, res) => res
    .status(404)
    .redirect('/'));
exports.default = controller;
//# sourceMappingURL=web.js.map