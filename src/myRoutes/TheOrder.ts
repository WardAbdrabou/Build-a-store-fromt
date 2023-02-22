import express from 'express'
import myTokenOfAuth from '../The Middleware/myAuthorisation'
import myControllForOrder from '../theController/TheOrder'

const myRouterForOrders = express.Router()
const myAllControll = new myControllForOrder()

myRouterForOrders.get('/', myTokenOfAuth, myAllControll.haveYourOrder)
myRouterForOrders.get('/:id', myTokenOfAuth, myAllControll.haveOrderBymyID)
myRouterForOrders.get('/immedi_Order/:id', myTokenOfAuth, myAllControll.haveTheCurrentOrder)
myRouterForOrders.post('/make', myTokenOfAuth, myAllControll.makeNewOrder)
myRouterForOrders.post('/toAddNewProduct/:id', myTokenOfAuth, myAllControll.makeOrderForProduct)
myRouterForOrders.put('/:id', myTokenOfAuth, myAllControll.doOrderUpdate)
myRouterForOrders.delete('/:id', myTokenOfAuth, myAllControll.myOrderDelete)

export default myRouterForOrders