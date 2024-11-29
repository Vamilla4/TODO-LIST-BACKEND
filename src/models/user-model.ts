import { User } from "@prisma/client"


export interface RegisterUserRequest {
    username : string
    email : string
    password : string
}

export interface LoginUserRequest {
    email : string
    password : string
}

export interface UserResponse{
    token?:string
    username: string
}

export const toUserResponse=(user:User)=>{
return {
    token: user.token ?? "",
    username: user.username,
}
}