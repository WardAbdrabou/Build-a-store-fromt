"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const myUser_1 = require("../models/myUser");
const bcrypt_1 = __importDefault(require("bcrypt"));
const MyOwnStore = new myUser_1.myStoreForUser();
const pepper = process.env.BCRYPT_PASSWORD;
const MySaltRounds = parseInt(process.env.SALT_ROUNDS);
class myControllForUser {
    haveAllUser(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUser = yield MyOwnStore.haveAllUser();
                res.status(200).json(allUser);
            }
            catch (e) {
                res.status(400).json(e);
            }
        });
    }
    haveUserBymyID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const myUser = yield MyOwnStore.haveUserBymyID(parseInt(req.params.id));
                if (myUser) {
                    res.status(200).json(myUser);
                }
                else {
                    res.status(404).json('user is not exsist');
                }
            }
            catch (e) {
                res.status(400).json({ e: Error.toString() });
            }
        });
    }
    makeNewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!(req.body.name_TheUser || !req.body.myPassword_Value)) {
                    return res.status(400).json({
                        error: 'username or password is not match',
                    });
                }
                const PasswordHash = bcrypt_1.default.hashSync(req.body.myPassword_Value + pepper, MySaltRounds);
                const myUser = yield MyOwnStore.makeNewUser({
                    name_TheUser: req.body.name_TheUser,
                    myFirst_Name: req.body.myFirst_Name,
                    myLast_Name: req.body.myLast_Name,
                    myPassword_Value: PasswordHash,
                });
                delete myUser.password_digest;
                myUser.token = jsonwebtoken_1.default.sign({ id: myUser.id, name_TheUser: myUser.name_TheUser }, process.env.TOKEN_SECRET);
                res.status(201).json(myUser);
            }
            catch (e) {
                return res.status(400).json(e);
            }
        });
    }
    doUserUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.name_TheUser || !req.body.myPassword_Value) {
                    return res.status(400).json({
                        error: 'Missing required parameters',
                    });
                }
                const myUser = yield MyOwnStore.doUserUpdate({
                    id: parseInt(req.params.id),
                    name_TheUser: req.body.name_TheUser,
                    myFirst_Name: req.body.myFirst_Name,
                    myLast_Name: req.body.myLast_Name,
                    myPassword_Value: req.body.myPassword_Value,
                });
                delete myUser.password_digest;
                res.status(201).json(myUser);
            }
            catch (e) {
                res.status(400).json(e);
            }
        });
    }
    myUserDelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield MyOwnStore.myUserDelete(parseInt(req.params.id));
                res.status(200).json({ status: `myUserDelete ${req.params.id}` });
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.default = myControllForUser;
