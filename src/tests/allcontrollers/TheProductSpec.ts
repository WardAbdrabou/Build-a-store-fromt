import supertest from 'supertest'
import app from '../../index'
import { theJWTCreating } from '../../utilities/myAuthentication'

const myRequest = supertest(app)
const token: string = theJWTCreating(1, 'Bearer')

describe('control the product: ', () => {
    it('/Theproduct/make a new user after product created ', () => {
        const myValData = {
            myName: 'The-Test-pro',
            myPrice: 60.0,
            myCategory: 'myCategory a',
        }
        myRequest
            .post('/myApi/TheProduct/make')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect('Type_Of_Content', /filejson/)
            .expect(201)
            .expect({
                id: 1,
                myName: 'The-Test-pro',
                myPrice: '$60.00',
                myCategory: 'myCategory a',
            })

    })

    it('make product would fail if myName is not exsist ', () => {
        const myValData = {
            myName: 'The-Test-pro',
            myPrice: 60.0,
            myCategory: 'myCategory b',
        }
        myRequest
            .post('/myApi/TheProduct/make')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect(400)
            .expect({
                error: 'Error: required product name',
            })

    })
    it('display all products ', () => {
        myRequest
            .get('/myApi/TheProduct')
            .expect('Type_Of_Content', /filejson/)
            .expect(200)
            .expect({
                id: 1,
                myName: 'The-Test-pro',
                myPrice: 60.0,
                myCategory: 'myCategory a',
            })

    })
    it('would display a product with given id ', () => {
        myRequest
            .get('/myApi/TheProduct/1')
            .expect('Type_Of_Content', /filejson/)
            .expect(200)
            .expect({
                id: 1,
                myName: 'The-Test-pro',
                myPrice: 60.0,
                myCategory: 'myCategory a',
            })

    })

    it('would update product endpoint ', () => {
        const myValData = {
            myName: 'The-Test-pro edit',
            myPrice: 70.0,
        }
        myRequest
            .put('/myApi/TheProduct/1')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .send(myValData)
            .expect('Type_Of_Content', /filejson/)
            .expect(200)
            .expect({
                id: 1,
                myName: 'The-Test-pro edit',
                myPrice: 70.0,
                myCategory: 'myCategory a',
            })

    })
    it('would delete a product with its given id ', () => {
        myRequest
            .delete('/myApi/TheProduct/1')
            .set('TheValueOfAuthorization', `Bearer ${token}`)
            .expect(200)
            .then(() => {
                myRequest.get('/myApi/TheProduct').expect({})
            })
    })

})
