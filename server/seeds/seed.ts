import {AssigmentModel} from '../models/assigmentModel'
import { UserModel } from '../models/userModel';
export const seedDb=async()=>{
    await UserModel.deleteMany({});
    for (let index = 0; index <100; index++) {
       var assigment=new AssigmentModel({
           name:`Task ${index}`,
           description:`Description number: ${index} `,
           author:"624b5d5b1939427ce0841994"
       })
       try {
        await assigment.save() 
       } catch (error:any) {
           console.log(error.message);   
       }
       var assigments=await AssigmentModel.find({})
      console.log(assigments);
      
    }
}
export const seedUser= async ()=>{
    var testUser = new UserModel({
        username: "tomer7410",
        password: "74107410"
    });
    
    // save user to database
    try {
        await testUser.save()
        let users=await UserModel.find({})
        console.log(users);
        
          
    } catch (error:any) {
        console.log(error.message);
        
    }
}

   