import mongoose from 'mongoose';
export interface IRepository {
    model: mongoose.Model<mongoose.Document>;
    deleteOne(data:any): Promise<any>;
    // findAll(data: any, params?: any, skip?: number, limit?: number): Promise<any>;
    find(err:any, data:any): Promise<any>;
    findById(id:string): Promise<any>;
    findByIdAndUpdate(id: string, params: any): Promise<any>;
    create(data: [any]): Promise<any>;
    // createMany(data: any): Promise<any>;
    // updateMany(err:any, data:any): Promise<any>;
    // update(err:any, data:any): Promise<any>;
    // aggregate(data:any): Promise<any>;
    
}