import express from 'express'
import { myStoreForOrder } from '../models/myOrder'

const MyOwnStore = new myStoreForOrder()

export default class myControllForOrder {
    async haveYourOrder(_req: express.Request, res: express.Response) {
        try {
            const allOrder = await MyOwnStore.haveYourOrder()
            res.status(200).json(allOrder)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async haveOrderBymyID(req: express.Request, res: express.Response) {
        try {
            const myOrder = await MyOwnStore.haveOrderBymyID(parseInt(req.params.id))
            res.status(200).json(myOrder)
        } catch (e) {
            res.status(400).json(e)
        }
    }

    async makeNewOrder(req: express.Request, res: express.Response) {
        try {
            const { myUser_VALID, myStatus } = req.body

            if (!myUser_VALID || !myStatus) {
                return res.status(400).json({
                    error: 'There is one or more  required value not found',
                })
            }

            const myOrder = await MyOwnStore.makeNewOrder({
                myUser_VALID: parseInt(myUser_VALID as string),
                myStatus: myStatus as string,
            })

            res.status(201).json(myOrder)
        } catch (e) {
            res.status(400).json(e)
        }
    }

    async makeOrderForProduct(req: express.Request, res: express.Response) {
        try {
            const myOrder_VAL_ID = parseInt(req.params.id)
            const myProduct_VAL_ID = parseInt(req.body.myProduct_VAL_ID as string)
            const myValQuantity = parseInt(req.body.myValQuantity as string)

            if (!myOrder_VAL_ID || !myProduct_VAL_ID || !myValQuantity) {
                return res.status(400).json({
                    error: 'There is one or more  required value not found',
                })
            }

            const myProduct = await MyOwnStore.makeOrderForProduct({
                myOrder_VAL_ID,
                myProduct_VAL_ID,
                myValQuantity,
            })

            res.status(200).json(myProduct)
        } catch (e) {}
    }

    async doOrderUpdate(req: express.Request, res: express.Response) {
        try {
            const { myUser_VALID, myStatus } = req.body
            const id = req.params.id

            if (!id || !myUser_VALID || !myStatus) {
                return res.status(400).json({
                    error: 'There is one or more  required value not found',
                })
            }

            const myOrder = await MyOwnStore.doOrderUpdate({
                id: parseInt(req.params.id as string),
                myUser_VALID: parseInt(myUser_VALID as string),
                myStatus: myStatus as string,
            })
            res.status(201).json( myOrder)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async myOrderDelete(req: express.Request, res: express.Response) {
        try {
            await MyOwnStore.myOrderDelete(parseInt(req.params.id as string))
            res.status(200).json({ status: `myOrderDelete ${req.params.id}` })
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async haveTheCurrentOrder(req: express.Request, res: express.Response) {
        try {
            const immedi_Order = await MyOwnStore.haveTheCurrentOrder(
                parseInt(req.params.id as string)
            )
            res.status(200).json(immedi_Order)
        } catch (e) {
            res.status(400).json(e)
        }
    }
}