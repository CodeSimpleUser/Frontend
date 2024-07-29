import { LoginModel } from "./loginModel";
import { ResponseModel } from "./responseModel";

export interface RegisterModule extends LoginModel,ResponseModel{
    
    email:string
    password:string
    firstName:string
    lastName:string


}