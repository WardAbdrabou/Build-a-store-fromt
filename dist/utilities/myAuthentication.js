"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theJWTCreating = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mytokenSecret = process.env.VALUESECRET;
const theJWTCreating = (id, name_TheUser) => {
    return jsonwebtoken_1.default.sign({ id, name_TheUser }, mytokenSecret);
};
exports.theJWTCreating = theJWTCreating;
