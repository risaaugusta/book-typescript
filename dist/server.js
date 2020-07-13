"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const book_service_1 = __importDefault(require("@core/service/book/book.service"));
const app = new app_1.default([
    new book_service_1.default()
]);
app.listen();
//# sourceMappingURL=server.js.map