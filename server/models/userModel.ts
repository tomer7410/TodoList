
import mongoose from 'mongoose';
import { Schema, model} from 'mongoose';

 interface User {
  email: string;
  password:string
 
}
const userSchema = new Schema<User>({
    email: { type: String, required: true },
    password: { type: String, required: true },
});
  // 3. Create a Model.
export const UserModel = model<User>('User', userSchema);
 
  
