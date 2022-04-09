import { Router } from "express";
import { validate, loginSchema, registerSchema } from "../validation";
import{userController} from '../controllers/userController'
import { auth, guest } from "../middleware";

const router = Router();

// Login

// NOTE login is idempotent, so we don't apply `guest` middleware
// https://stackoverflow.com/a/18263884
router.post("/login", validate(loginSchema),userController.loginUser);

// Logout

router.post("/logout", auth,userController.logoutUser);
// Register
router.post("/register", guest, validate(registerSchema),userController.registerUser);


export { router as auth };
