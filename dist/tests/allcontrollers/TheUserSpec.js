"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const myAuthentication_1 = require("../../utilities/myAuthentication");
const myRequest = (0, supertest_1.default)(index_1.default);
const token = (0, myAuthentication_1.theJWTCreating)(1, 'Bearer');
describe('control the users: ', () => {
    it('/Theuser/make would return a user ', () => {
        const myValData = {
            name_TheUser: 'wardA',
            myFirst_Name: 'ward',
            myLast_Name: 'Ahmed',
            myPassword_Value: 'mytest123'
        };
        myRequest
            .post('/myApi/Theuser/make')
            .send(myValData)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(201)
            .expect({
            id: 1,
            name_TheUser: 'wardA',
            myFirst_Name: 'ward',
            myLast_Name: 'Ahmed',
        });
    });
    it('/Theuser/make would fail if  required name_TheUser is not sent ', () => {
        const myValData = {
            myFirst_Name: 'ward',
            myLast_Name: 'Ahmed',
            myPassword_Value: 'mytest123'
        };
        myRequest
            .post('/myApi/Theuser/make')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(400)
            .expect({
            error: 'username or password is not found',
        });
    });
    it('/Theuser/make would fail if  myPassword_Value required is not sent ', () => {
        const myValData = {
            name_TheUser: 'wardA',
            myFirst_Name: 'ward',
            myLast_Name: 'Ahmed',
        };
        myRequest
            .post('/myApi/Theuser/make')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(400)
            .expect({
            error: 'username or password is not match',
        });
    });
    it('/Theuser would return all user ', () => {
        myRequest
            .get('/myApi/Theuser')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .expect(200)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect({
            id: 1,
            name_TheUser: 'wardA',
            myFirst_Name: 'ward',
            myLast_Name: 'Ahmed',
        });
    });
    it('/Theuser/:id would display a user ', () => {
        myRequest
            .get('/myApi/Theuser/1')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(200)
            .expect({
            id: 1,
            myFirst_Name: 'ward',
            myLast_Name: 'Ahmed',
            password_digest: 'mytest123'
        });
    });
    it('/Theuser/:id would  update a user ', () => {
        const myValData = {
            name_TheUser: 'AdamH',
            myFirst_Name: 'Adam',
            myLast_Name: 'Hamada',
            password_digest: 'mytest123'
        };
        myRequest
            .put('/myApi/Theuser/1')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(200)
            .expect({
            id: 1,
            name_TheUser: 'AdamH',
            myFirst_Name: 'Adam',
            myLast_Name: 'Hamada',
            password_digest: 'mytest123'
        });
        it('/Theuser/:id would  delete a user ', () => {
            myRequest.delete('/myApi/Theuser/1').expect(200).expect({
                myStatus: ' 1 user delete',
            });
        });
    });
});
