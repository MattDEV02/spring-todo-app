import { Router, Request, Response } from 'express';
import { filesData } from './config';


const controller: Router = Router();

controller
	.all('/',
		(req: Request, res: Response): void =>
			res.sendFile(filesData.file, filesData.options)
	)
	.all('/form',
		(req: Request, res: Response): void =>
			res.sendFile(filesData.file, filesData.options)
	)
	.all('/calendar',
		(req: Request, res: Response): void =>
			res.sendFile(filesData.file, filesData.options)
	);


export default controller;