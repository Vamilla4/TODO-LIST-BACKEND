import { NextFunction,Request,Response } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../errors/response-error";

export const errorMiddleware =  async(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof ZodError){
        res.status(400).json({
            errorMessage:'Validation error: ${JSON.stringify(error.message)}',
        })
    }else if (error instanceof ResponseError){
        res.status(400).json({
            errorMessage:error.message,
        })
    }else{
        res.status(500).json({
            errorMessage:error.message,
        })
    }
}