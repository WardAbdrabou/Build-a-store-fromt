import express from 'express'
import { myStoreForProduct } from '../models/myProduct'

const MyOwnStore = new myStoreForProduct()

export default class myControllForProduct {
    async haveALLProduct(_req: express.Request, res: express.Response) {
        try {
            const allProduct = await MyOwnStore.haveALLProduct()
            res.status(200).json(allProduct)
        } catch (e) {
            res.status(500)
            res.json(e)
        }
    }

    async haveProductBymyID(req: express.Request, res: express.Response) {
        try {
            const myProduct = await MyOwnStore.haveProductBymyID(parseInt(req.params.id))
            res.status(200).json(myProduct)
        } catch (e) {
            res.status(500)
            res.json(e)
        }
    }

    async makeNewProduct(req: express.Request, res: express.Response) {
        try {
            if (!req.body.myName) {
                return res.status(400).json({
                    error: 'name of the product is required',
                })
            }
            const myProduct = await MyOwnStore.makeNewProduct({
                myName: req.body.myName as string,
                myPrice: parseFloat(req.body.myPrice as string),
                myCategory: req.body.myCategory as string,
                myDescription: req.body.myDescription as string,
                url: req.body.url as string,
            })
            res.status(201).json(myProduct)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async doProductUpdate(req: express.Request, res: express.Response) {
        try {
            if (!req.body.myName) {
                return res.status(400).json({
                    error: 'name of the product is required',
                })
            }
            const myProduct = await MyOwnStore.doProductUpdate({
                id: parseInt(req.params.id as string),
                myName: req.body.myName as string,
                myPrice: parseFloat(req.body.myPrice as string),
                myCategory: req.body.myCategory as string,
                myDescription: req.body.myDescription as string,
                url: req.body.url as string,
            })
            res.status(201).json(myProduct)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async myProductDelete(req: express.Request, res: express.Response) {
        try {
            await MyOwnStore.myProductDelete(parseInt(req.params.id as string))
            res.status(200).json({ status: ` my Deleted product ${req.params.id}` })
        } catch (e) {
            res.status(500).json(e)
        }
    }
}