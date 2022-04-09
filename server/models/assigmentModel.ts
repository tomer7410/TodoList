import { Module } from 'module';
import mongoose from 'mongoose';
import { Schema, model, connect } from 'mongoose';

 interface Assigment {
  name: string;
  description:string;
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  isComplete:boolean
}
const assigmentSchema = new Schema<Assigment>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isComplete:{type:Boolean,required:true,default:false}
  });
  // 3. Create a Model.
  export const AssigmentModel = model<Assigment>('Assigment', assigmentSchema);
 
  
