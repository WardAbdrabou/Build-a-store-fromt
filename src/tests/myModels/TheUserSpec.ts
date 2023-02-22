import { myStoreForUser } from '../../models/myUser'

const MyOwnStore = new myStoreForUser()

describe('The Model for User', () => {
    it('would make new user', async () => {
        const Output= await MyOwnStore.makeNewUser({
            name_TheUser: 'wardA',
            myFirst_Name: 'ward',
            myLast_Name: 'myTest',
            myPassword_Value: 'mytest123',
        })
        expect(Output.name_TheUser).toEqual('wardA')
    })

    it('would update a user', async () => {
        const allUser = await MyOwnStore.haveAllUser()
        const myIdUser = allUser[0].id

        const Output = await MyOwnStore.doUserUpdate({
            id: myIdUser,
            name_TheUser: 'AdamA',
            myFirst_Name: 'Adam',
            myLast_Name: 'theTester',
            myPassword_Value: 'mytest123'
        })
        expect(Output.name_TheUser).toEqual('AdamA')
    })

    it('would return list of users', async () => {
        const Output = await MyOwnStore.haveAllUser()
        expect(Output.length).toEqual(1)
    })

    it('would return correct user', async () => {
        const allUser = await MyOwnStore.haveAllUser()
        const myIdUser = allUser[0].id as number

        const Output = await MyOwnStore.haveUserBymyID(myIdUser)
        expect(Output.name_TheUser).toEqual('AdamA')
    })

    it('should delete the user', async () => {
        let allUser = await MyOwnStore.haveAllUser()
        const myIdUser = allUser[0].id as number

        await MyOwnStore.myUserDelete(myIdUser)
        allUser = await MyOwnStore.haveAllUser();
        expect(allUser.length).toEqual(0)
        
    })


})