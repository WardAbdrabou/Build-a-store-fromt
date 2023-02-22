import supertest from 'supertest'
import app from '../../index'
import { theJWTCreating } from '../../utilities/myAuthentication'

const myRequest = supertest(app)
const token: string = theJWTCreating(1, 'Bearer')

describe('control the Order: ', () => {
    it('/TheOrder/make a new order ', () => {
        const myValData = {
            myUser_VAL_ID: 1,
            myStatus: 'recent',
        }
        myRequest
            .post('/myApi/TheOrder/make')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(201)
            .expect({
                id: 1,
                myUser_VALID: 1,
                myStatus: 'recent',
            })
    })

    it('TheOrder/toAddNewProduct/:id will add new product in order', () => {
        const myValData = {
            myProduct_VAL_ID: 1,
            myValQuantity: 10,
        }
        myRequest
            .post('/myApi/TheOrder/toAddNewProduct/1')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(201)
            .expect({
                id: 1,
                myOrder_val_ID: 1,
                myProduct_VAL_ID: 1,
                myValQuantity: 10,
            })
    })

    it('/TheOrder/make would fail if value of myUser_VALID not exsist  ', () => {
        const myValData = {
            myStatus: 'recent',
        }
        myRequest
            .post('/myApi/TheOrder/make')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect(400)
            .expect({
                error: 'There is one or more  required value not found ',
            })
    })

    it('/TheOrder/make would fail if value ofmyStats not exsist ', () => {
        const myValData = {
            myUser_VAL_ID: 1,
        }
        myRequest
            .post('/myApi/TheOrder/make')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect(400)
            .expect({
                error: 'There is one or more  required value not found',
            })
    })

    it('/TheOrder will display all order', () => {
        myRequest
            .get('/myApi/TheOrder')
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(200)
            .expect({
                id: 1,
                myUser_VAL_ID: 1,
                myStatus: 'recent',
            })
    })

    it('/TheOrder/:id show a order', () => {
        myRequest
            .get('/myApi/TheOrder/1')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(200)
            .expect({
                id: 1,
                myUser_VAL_ID: 1,
                myStatus: 'recent',
            })
    })

    it('/TheOrder would updating order', () => {
        const myValData = {
            id: 1,
            myUser_VAL_ID: 1,
            myStatus: 'do progress',
        }
        myRequest
            .put('/myApi/TheOrder/1')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect('Type_Of_Content', 'myApp/filejson')
            .expect(200)
            .expect({
                id: 1,
                myUser_VAL_ID: 1,
                myStatus: 'do progress',
            })
    })

    it('/TheOrder/:id would delete an order with its ID', () => {
        myRequest
            .delete('/myApi/TheOrder/1')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .expect(200)
            .expect({
                id: 1,
                myUser_VAL_ID: 1,
                myStatus: 'do progress',
            })
    })

    it('/TheOrder/immedi_Order/:id would display order which its status not completed', () => {
        myRequest
            .get('/myApi/TheOrder/immedi_Order/1')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .expect('Type_Of_Content', /filejson/)
            .expect(200)
            .expect({
                id: 1,
                myUser_VAL_ID: 1,
                myStatus: 'do progress',
            })
    })
})