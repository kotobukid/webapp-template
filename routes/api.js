"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/users.json', function (req, res, next) {
    res.json({
        users: [
            { id: 1, name: 'Taro', age: 18 },
            { id: 2, name: 'Jiro', age: 19 },
            { id: 3, name: 'Hanako', age: 20 },
            { id: 4, name: 'Mary', age: 21 },
        ]
    });
});
exports.default = router;
