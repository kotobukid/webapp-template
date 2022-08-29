"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    fs_1.default.readFile("../dist/index.html", (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.end(result);
    });
    // res.render('index', {title: 'Express'});
});
exports.default = router;
