import { ResponseModel } from "./responseModel"

export interface TokenModel extends ResponseModel{
    token:string
    expiration:string
}