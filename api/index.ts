import { Request, Response } from 'express';
import app from '../index';

export default async (req: Request, res: Response) => {
    return app(req, res);
};