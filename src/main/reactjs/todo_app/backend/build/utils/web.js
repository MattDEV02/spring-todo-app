"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("./config");
const router = express_1.Router();
router
    .all('/', (req, res) => res.sendFile(config_1.filesData.file, config_1.filesData.options))
    .all('/form', (req, res) => res.sendFile(config_1.filesData.file, config_1.filesData.options));
exports.default = router;
//# sourceMappingURL=web.js.map