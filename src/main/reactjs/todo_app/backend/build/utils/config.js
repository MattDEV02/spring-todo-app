"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesData = void 0;
const path_1 = __importDefault(require("path"));
const protocol = 'http', host = '127.0.0.1', port = 5000, folder = path_1.default.join(__dirname, '../../..', 'build');
const cb = (error) => {
    if (error)
        throw error;
    const url = `${protocol}://${host}:${port}/`;
    console.log(`Server is Listening on ${url}`);
};
const options = [port, host, cb];
const filesData = {
    file: 'index.html',
    options: {
        root: folder
    }
};
exports.filesData = filesData;
exports.default = options;
//# sourceMappingURL=config.js.map