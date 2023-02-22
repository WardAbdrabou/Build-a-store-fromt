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
exports.myStoreForUser = void 0;
// @ts-ignore
const Database_1 = __importDefault(require("../utilities/Database"));
class myStoreForUser {
    static makeNewUser(arg0) {
        throw new Error('Method not implemented.');
    }
    static myUserDelete(myIdUser) {
        throw new Error('Method not implemented.');
    }
    createUser(arg0) {
        throw new Error('Method not implemented.');
    }
    deleteUser(myIdUser) {
        throw new Error('Method not implemented.');
    }
    haveAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const mySQL = 'SELECT * FROM myUser';
                const Output = yield myConnecpool.query(mySQL);
                myConnecpool.release();
                return Output.rows;
            }
            catch (err) {
                throw new Error(`can not find user. Error: ${err}`);
            }
        });
    }
    haveUserBymyID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mySQL = 'SELECT * FROM myUser WHERE id=($1)';
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const Output = yield myConnecpool.query(mySQL, [id]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`Could not find user ${id}. Error: ${err}`);
            }
        });
    }
    makeNewUser(myU) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const mySQL = 'INSERT INTO users (name_TheUser, myFirst_Name, myLast_Name, password_digest) VALUES($1, $2, $3, $4) RETURNING *';
                const Output = yield myConnecpool.query(mySQL, [
                    myU.name_TheUser,
                    myU.myFirst_Name,
                    myU.myLast_Name,
                    myU.myPassword_Value,
                ]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`Could not add new user ${myU.myFirst_Name}. Error: ${err}`);
            }
        });
    }
    doUserUpdate(myU) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const myConnecpool = yield pool.connect();
                const mySQL = `UPDATE users SET name_TheUser = $2, myFirst_Name = $3, myLast_Name = $4, myPasswordValDigest = $5 WHERE id = $1 RETURNING *`;
                const Output = yield myConnecpool.query(mySQL, [
                    myU.id,
                    myU.name_TheUser,
                    myU.myFirst_Name,
                    myU.myLast_Name,
                    myU.myPassword_Value,
                ]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`Could not update user ${myU.id}. Error: ${err}`);
            }
        });
    }
    myUserDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const mySQL = 'DELETE FROM myUser WHERE id=($1)';
                const Output = yield myConnecpool.query(mySQL, [id]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`Could not delete user ${id}. Error: ${err}`);
            }
        });
    }
}
exports.myStoreForUser = myStoreForUser;
