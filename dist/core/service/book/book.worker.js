"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryProxy_1 = __importDefault(require("@core/util/storage/queryProxy"));
const book_model_1 = require("@core/models/book.model");
class BookWorker {
    constructor() {
        this.qp = new queryProxy_1.default(book_model_1.MBook);
    }
}
exports.default = BookWorker;
//# sourceMappingURL=book.worker.js.map