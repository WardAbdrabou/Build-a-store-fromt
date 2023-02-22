"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const myAuthorisation_1 = __importDefault(require("../The Middleware/myAuthorisation"));
const TheOrder_1 = __importDefault(require("../theController/TheOrder"));
const myRouterForOrders = express_1.default.Router();
const myAllControll = new TheOrder_1.default();
myRouterForOrders.get('/', myAuthorisation_1.default, myAllControll.haveYourOrder);
myRouterForOrders.get('/:id', myAuthorisation_1.default, myAllControll.haveOrderBymyID);
myRouterForOrders.get('/immedi_Order/:id', myAuthorisation_1.default, myAllControll.haveTheCurrentOrder);
myRouterForOrders.post('/make', myAuthorisation_1.default, myAllControll.makeNewOrder);
myRouterForOrders.post('/toAddNewProduct/:id', myAuthorisation_1.default, myAllControll.makeOrderForProduct);
myRouterForOrders.put('/:id', myAuthorisation_1.default, myAllControll.doOrderUpdate);
myRouterForOrders.delete('/:id', myAuthorisation_1.default, myAllControll.myOrderDelete);
exports.default = myRouterForOrders;
