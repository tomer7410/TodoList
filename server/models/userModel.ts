
import mongoose from 'mongoose';
import { Schema, model} from 'mongoose';

 interface User {
  username: string;
  password:string
 
}
const userSchema = new Schema<User>({
    username: { type: String, required: true },
    password: { type: String, required: true },
});
  // 3. Create a Model.
  export const UserModel = model<User>('User', userSchema);
 
  
