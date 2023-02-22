import express from 'express'
import myControllForProduct from '../theController/TheProduct'
import myTokenOfAuth from '../The Middleware/myAuthorisation'

const myRouterForProduct = express.Router()
const myAllControll = new myControllForProduct()

myRouterForProduct.get('/', myAllControll.haveALLProduct)
myRouterForProduct.get('/:id', myAllControll.haveProductBymyID)
myRouterForProduct.post('/make', myAllControll.makeNewProduct)
myRouterForProduct.put('/:id', myAllControll.doProductUpdate)
myRouterForProduct.delete('/:id', myTokenOfAuth, myAllControll.myProductDelete)

export default myRouterForProduct
