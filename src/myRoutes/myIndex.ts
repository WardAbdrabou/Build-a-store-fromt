import express from 'express'
import myRouterForUser from './TheUser'
import myRouterForProduct from './TheProduct'
import myRouterForOrders from './TheOrder'

const myRouterApi = express.Router()

myRouterApi.use('/TheUser', myRouterForUser)
myRouterApi.use('/TheProduct', myRouterForProduct)
myRouterApi.use('/TheOrder', myRouterForOrders)

export default myRouterApi