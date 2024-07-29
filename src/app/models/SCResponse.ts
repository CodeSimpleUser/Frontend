import { cookieResponse } from "./cookieResponseModel";

export interface SCResponse<T> extends cookieResponse{
    data:T
}