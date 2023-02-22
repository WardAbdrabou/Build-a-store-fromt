import express from 'express'
import myControllForUser from '../theController/TheUser'
import myTokenOfAuth from '../The Middleware/myAuthorisation'

const myRouterForUser = express.Router()
const myAllControll = new myControllForUser()

myRouterForUser.get('/', myAllControll.haveAllUser)
myRouterForUser.get('/:id', myAllControll.haveUserBymyID)
myRouterForUser.post('/make', myAllControll.makeNewUser)
myRouterForUser.put('/:id', myTokenOfAuth, myAllControll.doUserUpdate)
myRouterForUser.delete('/:id', myTokenOfAuth, myAllControll.myUserDelete)

export default myRouterForUser