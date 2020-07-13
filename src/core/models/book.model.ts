import mongoose, { Schema } from "mongoose";
import { Model } from "./model.interface";

export interface IBook{
    title: string;
    author: string;
    year: number;
}

export type BookDocument = mongoose.Document & {
    title: string;
    author: string;
    year: number;
}

const bookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
  });
  
  export const MBook = mongoose.model<IBook & mongoose.Document>(
    Model.Book,
    bookSchema
  );