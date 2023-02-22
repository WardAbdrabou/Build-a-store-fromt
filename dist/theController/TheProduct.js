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
const myProduct_1 = require("../models/myProduct");
const MyOwnStore = new myProduct_1.myStoreForProduct();
class myControllForProduct {
    haveALLProduct(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allProduct = yield MyOwnStore.haveALLProduct();
                res.status(200).json(allProduct);
            }
            catch (e) {
                res.status(500);
                res.json(e);
            }
        });
    }
    haveProductBymyID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const myProduct = yield MyOwnStore.haveProductBymyID(parseInt(req.params.id));
                res.status(200).json(myProduct);
            }
            catch (e) {
                res.status(500);
                res.json(e);
            }
        });
    }
    makeNewProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.myName) {
                    return res.status(400).json({
                        error: 'name of the product is required',
                    });
                }
                const myProduct = yield MyOwnStore.makeNewProduct({
                    myName: req.body.myName,
                    myPrice: parseFloat(req.body.myPrice),
                    myCategory: req.body.myCategory,
                    myDescription: req.body.myDescription,
                    url: req.body.url,
                });
                res.status(201).json(myProduct);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    doProductUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.myName) {
                    return res.status(400).json({
                        error: 'name of the product is required',
                    });
                }
                const myProduct = yield MyOwnStore.doProductUpdate({
                    id: parseInt(req.params.id),
                    myName: req.body.myName,
                    myPrice: parseFloat(req.body.myPrice),
                    myCategory: req.body.myCategory,
                    myDescription: req.body.myDescription,
                    url: req.body.url,
                });
                res.status(201).json(myProduct);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    myProductDelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield MyOwnStore.myProductDelete(parseInt(req.params.id));
                res.status(200).json({ status: ` my Deleted product ${req.params.id}` });
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.default = myControllForProduct;
