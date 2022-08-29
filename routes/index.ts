import express, {Request, Response, NextFunction, Router} from 'express';

const router: Router = express.Router();

router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('index', {title: 'Express'});
});

export default router;