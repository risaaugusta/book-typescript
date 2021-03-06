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
const app = express_1.default();
const port = process.env.PORT || 3000;
class App {
    constructor(_c) {
        this.app = express_1.default();
        this.initController(_c);
    }
    initController(_c) {
        return __awaiter(this, void 0, void 0, function* () {
            _c.forEach((_ct) => {
                this.app.use('/', _ct.r);
            });
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(3000, () => {
                console.log("App running on port 3000");
            });
        });
    }
}
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
exports.default = App;
//# sourceMappingURL=app.js.map