import mongoose from "mongoose";
import { IRepository } from "@core/util/storage/repository";
import { logger } from "@core/util/logger/logger";

class QueryProxy implements IRepository {

    public model: mongoose.Model<mongoose.Document>;

    constructor(modelName: mongoose.Model<mongoose.Document>) {
        this.model = modelName;
    }

    public async create(data: any): Promise<any> {
        const p = new Promise((resolve, reject) => {
            const q = new this.model(data);
            q.save((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    logger.info(result)
                    resolve(result);
                }
            });
        });
        return p;
    }

    public async find(err:any, data:any): Promise<any> {
        // tslint:disable-next-line: no-shadowed-variable
        const p = new Promise((resolve, reject) => {
            const q = new this.model(data);
            q.save((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    logger.info(result)
                    resolve(result);
                }
            });
        });
        return p;
    }

    public async findById(id: string): Promise<any> {
        const p = new Promise((resolve, reject) => {
            const q = this.model.findById(id);
            q.exec((err, result) => {
                if (err) {
                    logger.info(err)
                    reject(err);
                } else {
                    logger.info(result)
                    resolve(result);
                }
            });
        });
        return p;
    }

    public async findByIdAndUpdate(id: string, params: any): Promise<any> {
        const p = new Promise((resolve, reject) => {
            const q = this.model.findByIdAndUpdate(id, params)
            q.exec((err, result) => {
                if (err) {
                    logger.info(err)
                    reject(err);
                } else {
                    logger.info(result)
                    resolve(result);
                }
            });
        });
        return p;
    }

    public async deleteOne(data: any): Promise<any> {
        const p = new Promise((resolve, reject) => {
            const q = this.model.remove(data);
            q.exec((err, result) => {
                if (err) {
                    logger.info(err)
                    reject(err);
                } else {
                    logger.info(result)
                    resolve(result);
                }
            });
        });
        return p;
    }
}
export default QueryProxy;