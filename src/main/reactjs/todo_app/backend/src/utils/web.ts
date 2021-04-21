import { Router, Request, Response } from 'express';
import { filesData } from './config';


const controller: Router = Router();

const defaultResponse = (res: Response): void => res.sendFile(filesData.file, filesData.options);


controller
	.all('/',
		(req: Request, res: Response): void =>
			defaultResponse(res)
	)
	.all('/form',
		(req: Request, res: Response): void =>
			defaultResponse(res)
	)
	.all('/calendar',
		(req: Request, res: Response): void =>
			defaultResponse(res)
	)
	.all('/chart',
		(req: Request, res: Response): void =>
			defaultResponse(res)
	)
	.all('*', (req: Request, res: Response) =>
		res
			.status(404)
			.redirect('/')
	);


export default controller;