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
const myUser_1 = require("../../models/myUser");
const MyOwnStore = new myUser_1.myStoreForUser();
describe('The Model for User', () => {
    it('would make new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const Output = yield MyOwnStore.makeNewUser({
            name_TheUser: 'wardA',
            myFirst_Name: 'ward',
            myLast_Name: 'myTest',
            myPassword_Value: 'mytest123',
        });
        expect(Output.name_TheUser).toEqual('wardA');
    }));
    it('would update a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const allUser = yield MyOwnStore.haveAllUser();
        const myIdUser = allUser[0].id;
        const Output = yield MyOwnStore.doUserUpdate({
            id: myIdUser,
            name_TheUser: 'AdamA',
            myFirst_Name: 'Adam',
            myLast_Name: 'theTester',
            myPassword_Value: 'mytest123'
        });
        expect(Output.name_TheUser).toEqual('AdamA');
    }));
    it('would return list of users', () => __awaiter(void 0, void 0, void 0, function* () {
        const Output = yield MyOwnStore.haveAllUser();
        expect(Output.length).toEqual(1);
    }));
    it('would return correct user', () => __awaiter(void 0, void 0, void 0, function* () {
        const allUser = yield MyOwnStore.haveAllUser();
        const myIdUser = allUser[0].id;
        const Output = yield MyOwnStore.haveUserBymyID(myIdUser);
        expect(Output.name_TheUser).toEqual('AdamA');
    }));
    it('should delete the user', () => __awaiter(void 0, void 0, void 0, function* () {
        let allUser = yield MyOwnStore.haveAllUser();
        const myIdUser = allUser[0].id;
        yield MyOwnStore.myUserDelete(myIdUser);
        allUser = yield MyOwnStore.haveAllUser();
        expect(allUser.length).toEqual(0);
    }));
});
