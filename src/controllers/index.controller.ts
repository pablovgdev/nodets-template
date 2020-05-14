import { Request, Response, Router } from 'express';

const indexController = Router();

indexController.get('/', (req: Request, res: Response) => {
	res.status(200).send('Server listening')
});

export default indexController;