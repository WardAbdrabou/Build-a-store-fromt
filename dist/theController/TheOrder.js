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
Object.defineProperty(exports, "__esModule", { value: true });
const myOrder_1 = require("../models/myOrder");
const MyOwnStore = new myOrder_1.myStoreForOrder();
class myControllForOrder {
    haveYourOrder(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allOrder = yield MyOwnStore.haveYourOrder();
                res.status(200).json(allOrder);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    haveOrderBymyID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const myOrder = yield MyOwnStore.haveOrderBymyID(parseInt(req.params.id));
                res.status(200).json(myOrder);
            }
            catch (e) {
                res.status(400).json(e);
            }
        });
    }
    makeNewOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { myUser_VALID, myStatus } = req.body;
                if (!myUser_VALID || !myStatus) {
                    return res.status(400).json({
                        error: 'There is one or more  required value not found',
                    });
                }
                const myOrder = yield MyOwnStore.makeNewOrder({
                    myUser_VALID: parseInt(myUser_VALID),
                    myStatus: myStatus,
                });
                res.status(201).json(myOrder);
            }
            catch (e) {
                res.status(400).json(e);
            }
        });
    }
    makeOrderForProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const myOrder_VAL_ID = parseInt(req.params.id);
                const myProduct_VAL_ID = parseInt(req.body.myProduct_VAL_ID);
                const myValQuantity = parseInt(req.body.myValQuantity);
                if (!myOrder_VAL_ID || !myProduct_VAL_ID || !myValQuantity) {
                    return res.status(400).json({
                        error: 'There is one or more  required value not found',
                    });
                }
                const myProduct = yield MyOwnStore.makeOrderForProduct({
                    myOrder_VAL_ID,
                    myProduct_VAL_ID,
                    myValQuantity,
                });
                res.status(200).json(myProduct);
            }
            catch (e) { }
        });
    }
    doOrderUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { myUser_VALID, myStatus } = req.body;
                const id = req.params.id;
                if (!id || !myUser_VALID || !myStatus) {
                    return res.status(400).json({
                        error: 'There is one or more  required value not found',
                    });
                }
                const myOrder = yield MyOwnStore.doOrderUpdate({
                    id: parseInt(req.params.id),
                    myUser_VALID: parseInt(myUser_VALID),
                    myStatus: myStatus,
                });
                res.status(201).json(myOrder);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    myOrderDelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield MyOwnStore.myOrderDelete(parseInt(req.params.id));
                res.status(200).json({ status: `myOrderDelete ${req.params.id}` });
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    haveTheCurrentOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const immedi_Order = yield MyOwnStore.haveTheCurrentOrder(parseInt(req.params.id));
                res.status(200).json(immedi_Order);
            }
            catch (e) {
                res.status(400).json(e);
            }
        });
    }
}
exports.default = myControllForOrder;
