"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TheUser_1 = __importDefault(require("../theController/TheUser"));
const myAuthorisation_1 = __importDefault(require("../The Middleware/myAuthorisation"));
const myRouterForUser = express_1.default.Router();
const myAllControll = new TheUser_1.default();
myRouterForUser.get('/', myAllControll.haveAllUser);
myRouterForUser.get('/:id', myAllControll.haveUserBymyID);
myRouterForUser.post('/make', myAllControll.makeNewUser);
myRouterForUser.put('/:id', myAuthorisation_1.default, myAllControll.doUserUpdate);
myRouterForUser.delete('/:id', myAuthorisation_1.default, myAllControll.myUserDelete);
exports.default = myRouterForUser;
