"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_myTEST_DB, POSTGRES_myDEV_DB, ENV, } = process.env;
let DBpool;
console.log(ENV);
if (ENV === 'test') {
    DBpool = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_myTEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    });
}
if (ENV === 'dev') {
    DBpool = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_myDEV_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    });
}
exports.default = DBpool;
