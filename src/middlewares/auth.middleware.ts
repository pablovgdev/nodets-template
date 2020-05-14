import { NextFunction, Request, Response } from 'express';

export function auth(req: Request, res: Response, next: NextFunction) {
    if (true) {
        return res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
    next();
}