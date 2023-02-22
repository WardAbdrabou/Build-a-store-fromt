import express from 'express'
import jwt from 'jsonwebtoken'
import { myStoreForUser } from '../models/myUser'
import bcrypt from 'bcrypt'

const MyOwnStore = new myStoreForUser()
const pepper: string = process.env.BCRYPT_PASSWORD as string
const MySaltRounds: number = parseInt(process.env.SALT_ROUNDS as string)

export default class myControllForUser {
    async haveAllUser(_req: express.Request, res: express.Response) {
        try {
            const allUser = await MyOwnStore.haveAllUser()
            res.status(200).json(allUser)
        } catch (e) {
            res.status(400).json(e)
        }
    }

    async haveUserBymyID(req: express.Request, res: express.Response) {
        try {
            const myUser = await MyOwnStore.haveUserBymyID(parseInt(req.params.id))

            if (myUser) {
                res.status(200).json(myUser)
            } else {
                res.status(404).json('user is not exsist')
            }
        } catch (e) {
            res.status(400).json({ e : Error.toString() })
        }
    }

    async makeNewUser(req: express.Request, res: express.Response) {
        try {
            if (!(req.body.name_TheUser || !req.body.myPassword_Value)) {
                return res.status(400).json({
                    error: 'username or password is not match',
                })
            }

            const PasswordHash = bcrypt.hashSync(
                req.body.myPassword_Value + pepper,
                MySaltRounds
            )

            const myUser = await MyOwnStore.makeNewUser({
                name_TheUser: req.body.name_TheUser as string,
                myFirst_Name: req.body.myFirst_Name as string,
                myLast_Name: req.body.myLast_Name as string,
                myPassword_Value: PasswordHash,
            })
            delete myUser.password_digest

            myUser.token = jwt.sign(
                { id: myUser.id, name_TheUser: myUser.name_TheUser },
                process.env.TOKEN_SECRET as string
            )
            res.status(201).json(myUser)
        } catch (e) {
            return res.status(400).json(e)
        }
    }

    async doUserUpdate(req: express.Request, res: express.Response) {
        try {
            if (!req.body.name_TheUser || !req.body.myPassword_Value) {
                return res.status(400).json({
                    error: 'Missing required parameters',
                })
            }
            const myUser = await MyOwnStore.doUserUpdate({
                id: parseInt(req.params.id as string),
                name_TheUser: req.body.name_TheUser as string,
                myFirst_Name: req.body.myFirst_Name as string,
                myLast_Name: req.body.myLast_Name as string,
                myPassword_Value: req.body.myPassword_Value as string,
            })
            delete myUser.password_digest

            res.status(201).json(myUser)
        } catch (e) {
            res.status(400).json(e)
        }
    }

    async myUserDelete(req: express.Request, res: express.Response) {
        try {
            await MyOwnStore.myUserDelete(parseInt(req.params.id as string))
            res.status(200).json({ status: `myUserDelete ${req.params.id}` })
        } catch (e) {
            res.status(500).json(e)
        }
    }
}