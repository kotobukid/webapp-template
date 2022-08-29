import express, {Request, Response, NextFunction, Router} from 'express';
import fs from 'fs';

const router: Router = express.Router();

router.get('/', function (req: Request, res: Response, next: NextFunction) {
    fs.readFile("../dist/index.html", (err: Error | null, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.end(result);
    })
    // res.render('index', {title: 'Express'});
});

export default router;