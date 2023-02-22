"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const myIndex_1 = __importDefault(require("./myRoutes/myIndex"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const myOptionsForCors = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(myOptionsForCors));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/myApi', myIndex_1.default);
app.get('/', (req, res) => {
    res.redirect('/myApi');
});
app.listen(port, function () {
    console.log(`starting app on: ${port}`);
});
exports.default = app;
