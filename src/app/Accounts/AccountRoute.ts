import { Router } from "express";
import {AccountController} from "./AccountController";
const AccountRouter = Router()
const controller = new AccountController();
AccountRouter.route("/Login").post(controller.login);
AccountRouter.route("/Register").post(controller.signup);
export default AccountRouter;