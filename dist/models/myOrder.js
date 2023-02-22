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
exports.myStoreForOrder = void 0;
// @ts-ignore
const Database_1 = __importDefault(require("../utilities/Database"));
class myStoreForOrder {
    createOrder(arg0) {
        throw new Error('Method not implemented.');
    }
    getOrders() {
        throw new Error('Method not implemented.');
    }
    getOrderById(arg0) {
        throw new Error('Method not implemented.');
    }
    updateOrder(arg0) {
        throw new Error('Method not implemented.');
    }
    deleteOrder(arg0) {
        throw new Error('Method not implemented.');
    }
    haveYourOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const mySQL = 'SELECT * FROM myOrder';
                const Output = yield myConnecpool.query(mySQL);
                myConnecpool.release();
                return Output.rows;
            }
            catch (err) {
                throw new Error(`can not find myOrder. Error: ${err}`);
            }
        });
    }
    haveOrderBymyID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mySQL = 'SELECT * FROM myOrder WHERE id=($1)';
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const Output = yield myConnecpool.query(mySQL, [id]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`can not find product ${id}. Error: ${err}`);
            }
        });
    }
    makeNewOrder(myO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mySQL = 'INSERT INTO myOrder (myUser_VALID, myStatus) VALUES($1, $2) RETURNING *';
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const Output = yield myConnecpool.query(mySQL, [myO.myUser_VALID, myO.myStatus]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`would not add new order. Error: ${err}`);
            }
        });
    }
    doOrderUpdate(myO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mySQL = `UPDATE myOrder SET myUser_VALID = $2, myStatus = $3 WHERE id = $1 RETURNING *`;
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const Output = yield myConnecpool.query(mySQL, [
                    myO.id,
                    myO.myUser_VALID,
                    myO.myStatus,
                ]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`Could not update order ${myO.id}. Error: ${err}`);
            }
        });
    }
    myOrderDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const myConnection = yield Database_1.default.connect();
                const mySQL = 'DELETE FROM products WHERE id=($1)';
                const Output = yield myConnection.query(mySQL, [id]);
                myConnection.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`Could not delete order ${id}. Error: ${err}`);
            }
        });
    }
    haveTheCurrentOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const myConnection = yield Database_1.default.connect();
                const mySQL = `SELECT *
                         FROM myOrder
                         WHERE myUser_VALID = ($1);`;
                const Output = yield myConnection.query(mySQL, [id]);
                myConnection.release();
                return Output.rows;
            }
            catch (err) {
                throw new Error(`would not find order for user ${id}. Error: ${err}`);
            }
        });
    }
    makeOrderForProduct(myPro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mySQL = 'INSERT INTO order_products (myOrder_VAL_ID, myProduct_VAL_ID, myValQuantity) VALUES($1, $2, $3) RETURNING *';
                // @ts-ignore
                const myConnecpool = yield Database_1.default.connect();
                const Output = yield myConnecpool.query(mySQL, [
                    myPro.myOrder_VAL_ID,
                    myPro.myProduct_VAL_ID,
                    myPro.myValQuantity,
                ]);
                myConnecpool.release();
                return Output.rows[0];
            }
            catch (err) {
                throw new Error(`would not add product. Error: ${err}`);
            }
        });
    }
}
exports.myStoreForOrder = myStoreForOrder;
