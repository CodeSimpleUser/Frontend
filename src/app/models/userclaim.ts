import { ResponseModel } from "./responseModel"

export interface UserClaim extends ResponseModel{
    type:string
    value:string   
}