import express, {Request, Response, NextFunction, Router} from 'express';
import {User} from "../types";

const router: Router = express.Router();

router.get('/users.json', function (req: Request, res: Response<{ users: User[] }>, next: NextFunction) {
    res.json({
        users: [
            {id: 1, name: 'Taro', age: 18},
            {id: 2, name: 'Jiro', age: 19},
            {id: 3, name: 'Hanako', age: 20},
            {id: 4, name: 'Mary', age: 21},
        ]
    })
});

export default router;