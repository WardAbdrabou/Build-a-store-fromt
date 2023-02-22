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
const myProduct_1 = require("../../models/myProduct");
const MyOwnStore = new myProduct_1.myStoreForProduct();
describe('The Model of Product', () => {
    it('would do new a product', () => __awaiter(void 0, void 0, void 0, function* () {
        const Output = yield MyOwnStore.makeNewProduct({
            myName: 'The-Test-pro',
            myPrice: 60.5,
            myCategory: 'myCategory Test',
            myDescription: '',
            url: ''
        });
        expect(Output).toEqual({
            id: 1,
            myName: 'The-Test-pro',
            myPrice: '60.50',
            myCategory: 'myCategory Test',
            myDescription: '',
            url: ''
        });
    }));
    it('would update a my product', () => __awaiter(void 0, void 0, void 0, function* () {
        const Output = yield MyOwnStore.doProductUpdate({
            id: 1,
            myName: 'The-Test-pro 2',
            myPrice: 70.50,
            myCategory: 'my New Category',
            myDescription: '',
            url: ''
        });
        expect(Output).toEqual({
            id: 1,
            myName: 'The-Test-pro 2',
            myPrice: '70.50',
            myCategory: 'my New Category',
            myDescription: '',
            url: ''
        });
    }));
    it('would return a list of product', () => __awaiter(void 0, void 0, void 0, function* () {
        const Output = yield MyOwnStore.haveALLProduct();
        expect(Output).toEqual([
            {
                id: 1,
                myName: 'The-Test-pro 2',
                myPrice: '70.50',
                myCategory: 'my New Category',
                myDescription: '',
                url: ''
            },
        ]);
    }));
    it('would return the correct product', () => __awaiter(void 0, void 0, void 0, function* () {
        const Output = yield MyOwnStore.haveProductBymyID(1);
        expect(Output).toEqual({
            id: 1,
            myName: 'The-Test-pro 2',
            myPrice: '70.50',
            myCategory: 'my New Category',
            myDescription: '',
            url: ''
        });
    }));
    it('would delete the product', () => __awaiter(void 0, void 0, void 0, function* () {
        yield MyOwnStore.myProductDelete(1);
        const Output = yield MyOwnStore.haveALLProduct();
        expect(Output).toEqual([]);
    }));
});
