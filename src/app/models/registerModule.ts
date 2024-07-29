import { LoginModel } from "./loginModel";
import { ResponseModel } from "./responseModel";

export interface RegisterModule extends LoginModel,ResponseModel{
    firstName:string
    lastName:string
}