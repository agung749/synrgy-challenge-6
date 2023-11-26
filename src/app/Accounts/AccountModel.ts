import { Model, ModelObject } from "objection";

export class AccountModel extends Model {
    id !: string;
    fullName!:string;
    address!:string;
     phone!:string;
     username!:string;
     email!:string;
     picture_url!:string;
     password!:string;
     role!:number;
     static get tableName(){
        return 'account'
     }
}    
