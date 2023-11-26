import { Request, Response, NextFunction } from "express";

function notFound(_req:Request, res:Response,_next:NextFunction) {
    res.status(404).json({
        status: 'Not Found',
        message: "Resource Not Found"
    })
}

export default notFound