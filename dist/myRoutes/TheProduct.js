"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TheProduct_1 = __importDefault(require("../theController/TheProduct"));
const myAuthorisation_1 = __importDefault(require("../The Middleware/myAuthorisation"));
const myRouterForProduct = express_1.default.Router();
const myAllControll = new TheProduct_1.default();
myRouterForProduct.get('/', myAllControll.haveALLProduct);
myRouterForProduct.get('/:id', myAllControll.haveProductBymyID);
myRouterForProduct.post('/make', myAllControll.makeNewProduct);
myRouterForProduct.put('/:id', myAllControll.doProductUpdate);
myRouterForProduct.delete('/:id', myAuthorisation_1.default, myAllControll.myProductDelete);
exports.default = myRouterForProduct;
