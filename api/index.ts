import { Request, Response } from 'express';
import app from '../index';

export default async (req: Request, res: Response) => {
    const PORT = process.env.PORT ?? 1337;

    app.listen(PORT, () => {
        console.log(`🚀 Server is accessible at http://localhost:${PORT}`);
    });

    return app(req, res);
};