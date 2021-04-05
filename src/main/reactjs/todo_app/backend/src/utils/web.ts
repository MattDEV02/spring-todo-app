import { Router, Request, Response } from 'express';
import { filesData } from './config';


const router: Router = Router();

router
	.all('/',
		(req: Request, res: Response): void =>
			res.sendFile(filesData.file, filesData.options)
	)
	.all('/form',
		(req: Request, res: Response): void =>
			res.sendFile(filesData.file, filesData.options)
	);



export default router;