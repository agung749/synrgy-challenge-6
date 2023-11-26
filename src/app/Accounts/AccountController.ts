
import {Account} from './AccountDto';
import AccountService from "./AccountService";
import { Request, Response, NextFunction } from "express";
const AccountService1 =new AccountService();
export class  AccountController { 

async signup(req: Request, res: Response, next: NextFunction) {

    try {
      const createBrand:Account = req.body;
      res.status(200).json({
        message: "Berhasil membuat data user",
        data: await AccountService1.create(createBrand)
      });
    } catch (error) {
      next(error);
    }
  }
async login(req: Request, res: Response, next: NextFunction) {
  try {
    const createBrand:Account = req.body;
    res.status(200).json({
      message: "Berhasil login",
      data: await AccountService1.login(createBrand,res,req),
    });
  } catch (error) {
    next(error);
  }
}
}
