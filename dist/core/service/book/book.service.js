"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enum_1 = require("@core/util/enum/enum");
const http_output_1 = require("@core/util/shared/http.output");
const book_worker_1 = __importDefault(require("./book.worker"));
class BookService {
    constructor() {
        this.path = '/app';
        this.r = express_1.default.Router();
        this.ping = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send(new http_output_1.HttpOutput(enum_1.APISTATUS.SUCCESS, 'duar'));
        });
        this.initRouter();
        this.worker = new book_worker_1.default();
    }
    initRouter() {
        this.r.get(`${this.path}/ping`, this.ping);
    }
}
exports.default = BookService;
//# sourceMappingURL=book.service.js.map