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
exports.myStoreForProduct = void 0;
// @ts-ignore
const Database_1 = __importDefault(require("../utilities/Database"));
class myStoreForProduct {
    static myProductDelete(myIdProduct) {
        throw new Error('Method not implemented.');
    }
    deleteProduct(myIdProduct) {
        throw new Error('Method not implemented.');
    }
    haveALLProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const mySQL = 'SELECT * FROM myProduct';
                const Output = yield myConnecpool.query(mySQL);
                myConnecpool.release();
                return Output.rows;
            }
            catch (err) {
                throw new Error(`Could not get myProduct. Error: ${err}`);
            }
        });
    }
    haveProductBymyID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mySQL = 'SELECT * FROM myProduct WHERE id=($1)';
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const Output = yield myConnecpool.query(mySQL, [id]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`Could not find product ${id}. Error: ${err}`);
            }
        });
    }
    makeNewProduct(myPro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mySQL = 'INSERT INTO products (myName, myPrice, myCategory, url, myDescription) VALUES($1, $2, $3, $4, $5) RETURNING *';
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const Output = yield myConnecpool.query(mySQL, [
                    myPro.myName,
                    myPro.myPrice,
                    myPro.myCategory,
                    myPro.url,
                    myPro.myDescription,
                ]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`would not add new product ${myPro.myName}. Error: ${err}`);
            }
        });
    }
    doProductUpdate(myPro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mySQL = `UPDATE myProduct SET myName = $2, myPrice = $3, myCategory = $4 WHERE myID = $1 RETURNING *`;
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const Output = yield myConnecpool.query(mySQL, [
                    myPro.id,
                    myPro.myName,
                    myPro.myPrice,
                    myPro.myCategory,
                ]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`Could not update product ${myPro.id}. Error: ${err}`);
            }
        });
    }
    myProductDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mySQL = 'DELETE FROM myProduct WHERE myID=($1)';
                // @ts-ignore
                const myConnection = yield Database_1.default.connect();
                const Output = yield myConnection.query(mySQL, [id]);
                myConnection.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`would not delete product ${id}. Error: ${err}`);
            }
        });
    }
}
exports.myStoreForProduct = myStoreForProduct;
