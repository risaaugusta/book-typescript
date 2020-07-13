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
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@core/util/logger/logger");
class QueryProxy {
    constructor(modelName) {
        this.model = modelName;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = new Promise((resolve, reject) => {
                const q = new this.model(data);
                q.save((err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        logger_1.logger.info(result);
                        resolve(result);
                    }
                });
            });
            return p;
        });
    }
    find(err, data) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: no-shadowed-variable
            const p = new Promise((resolve, reject) => {
                const q = new this.model(data);
                q.save((err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        logger_1.logger.info(result);
                        resolve(result);
                    }
                });
            });
            return p;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = new Promise((resolve, reject) => {
                const q = this.model.findById(id);
                q.exec((err, result) => {
                    if (err) {
                        logger_1.logger.info(err);
                        reject(err);
                    }
                    else {
                        logger_1.logger.info(result);
                        resolve(result);
                    }
                });
            });
            return p;
        });
    }
    findByIdAndUpdate(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = new Promise((resolve, reject) => {
                const q = this.model.findByIdAndUpdate(id, params);
                q.exec((err, result) => {
                    if (err) {
                        logger_1.logger.info(err);
                        reject(err);
                    }
                    else {
                        logger_1.logger.info(result);
                        resolve(result);
                    }
                });
            });
            return p;
        });
    }
    deleteOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = new Promise((resolve, reject) => {
                const q = this.model.remove(data);
                q.exec((err, result) => {
                    if (err) {
                        logger_1.logger.info(err);
                        reject(err);
                    }
                    else {
                        logger_1.logger.info(result);
                        resolve(result);
                    }
                });
            });
            return p;
        });
    }
}
exports.default = QueryProxy;
//# sourceMappingURL=queryProxy.js.map