import {Request, Response, request, Router} from "express";
import express from "express";
import { APISTATUS} from '@core/util/enum/enum';
import { HttpOutput } from '@core/util/shared/http.output';
import BookWorker from "./book.worker";


export interface IMoklet{
    path: String,
    r: Router
}

class BookService implements IMoklet {
    path = '/app';
    r = express.Router()
    worker:BookWorker
    constructor() {
        this.initRouter();
        this.worker = new BookWorker();
    }
    initRouter() {
        this.r.get(`${this.path}/ping`, this.ping);
    }

    private ping = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        return res.status(200).send(new HttpOutput(APISTATUS.SUCCESS, 'duar'));
    } 
    
}  

export default BookService;



