// for logic
// will be imported by routes

import {Request, Response, NextFunction} from 'express';

function helloBook(req: Request, res: Response, next: NextFunction) {
    return res.send('Hello server');
}

export {helloBook};