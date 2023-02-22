"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TheUser_1 = __importDefault(require("./TheUser"));
const TheProduct_1 = __importDefault(require("./TheProduct"));
const TheOrder_1 = __importDefault(require("./TheOrder"));
const myRouterApi = express_1.default.Router();
myRouterApi.use('/TheUser', TheUser_1.default);
myRouterApi.use('/TheProduct', TheProduct_1.default);
myRouterApi.use('/TheOrder', TheOrder_1.default);
exports.default = myRouterApi;
