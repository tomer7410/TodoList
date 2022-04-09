import {Request, Response } from 'express';
import { SESSION_COOKIE } from '../config';
import { comparePassword, hashPassword } from '../services/userServices';
import { UserModel } from '../models/userModel';
import { User } from '../db/db';
export const userController=
    {
        registerUser : async (req:Request, res:Response) => {
            const { email, password} =req.body;
            const userExists = await UserModel.findOne({email:email})
            if (userExists) {
                console.log("user is exist");
                console.log(userExists);
                
                // TODO throw Joi error if possible, assuming the above check is async
                return res.status(400).json({
                    message: "Email is already taken",
                });
            }
            // Create the user
            var user=new UserModel({
                email:email,
                password:await hashPassword(password)
            })
            await user.save()
            req.session.userId=user.id;
            return res.status(200).json({message:"ok"})
            
        },
        loginUser:async (req:Request, res:Response) => {
            const { email, password } = req.body;
            console.log('im here');
            // TODO this lookup isn't constant time, so it can leak information
            // (ex: when the email doesn't exist). When using a DB like Postgres,
            // index the `email` field so that your query is timing-safe.
            const user= await UserModel.findOne({email:email})
            // NOTE even if the user doesn't exist, we still hash the plaintext
            // password. Although inefficient, this helps mitigate a timing attack.
            const fakeHash =
              "$2b$12$tLn0rFkPBoE1WCpdM6MjR.t/h6Wzql1kAd27FecEDtjRYsTFlYlWa"; // 'test'
            const pwdHash = user?.password|| fakeHash;
            const pwdMatches = await comparePassword(password,pwdHash);
          
            // NOTE bcrypt's compare() is *not* timing-safe
            // https://github.com/kelektiv/node.bcrypt.js/issues/720
            // This is fine because the generated hash can't be predicted, so the
            // attacker can't learn anything based on the time of this comparison
            // https://github.com/bcrypt-ruby/bcrypt-ruby/pull/43
            if (!user || !pwdMatches) {
              // Return 401 for invalid creds https://stackoverflow.com/a/32752617
              return res.status(401).json({
                message: "Email or password is incorrect",
              });
            }
            
            
            req.session.userId = user.id;
          
            res.json({ message: "OK" });
        },
        logoutUser:(req:Request, res:Response) => {
            req.session.destroy((err) => {
              if (err) throw err;
          
              res.clearCookie(SESSION_COOKIE);
          
              res.json({ message: "OK" });
            });
        }
    }

