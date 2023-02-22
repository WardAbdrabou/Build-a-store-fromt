// @ts-ignore
import DBpool from '../utilities/Database'
import { myUser } from '../myInterfaces/TheUseInterface'

export class myStoreForUser {
    static makeNewUser(arg0: { name_TheUser: string; myFirst_Name: string; myLast_Name: string; myPassword_Value: string; }) {
        throw new Error('Method not implemented.');
    }
    static myUserDelete(myIdUser: number) {
        throw new Error('Method not implemented.');
    }
    createUser(arg0: { username: string; first_name: string; last_name: string; password: string }) {
        throw new Error('Method not implemented.')
    }
    deleteUser(myIdUser: number) {
        throw new Error('Method not implemented.')
    }
    async haveAllUser(): Promise<myUser[]> {
        try {
            // @ts-ignore
            const myConnecpool = await DBpool.connect()
            const mySQL = 'SELECT * FROM myUser'
            const Output = await myConnecpool.query(mySQL)
            myConnecpool.release()

            return Output.rows
        } catch (err) {
            throw new Error(`can not find user. Error: ${err}`)
        }
    }

    async haveUserBymyID(id: number): Promise<myUser> {
        try {
            const mySQL = 'SELECT * FROM myUser WHERE id=($1)'
            // @ts-ignore
            const myConnecpool = await DBpool.connect()
            const Output = await myConnecpool.query(mySQL, [id])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`Could not find user ${id}. Error: ${err}`)
        }
    }

    async makeNewUser(myU: myUser): Promise<myUser> {
        try {
            // @ts-ignore
            const myConnecpool = await DBpool.connect()
            const mySQL =
                'INSERT INTO users (name_TheUser, myFirst_Name, myLast_Name, password_digest) VALUES($1, $2, $3, $4) RETURNING *'

            const Output = await myConnecpool.query(mySQL, [
                myU.name_TheUser,
                myU.myFirst_Name,
                myU.myLast_Name,
                myU.myPassword_Value,
            ])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(
                `Could not add new user ${myU.myFirst_Name}. Error: ${err}`
            )
        }
    }

    async doUserUpdate(myU: myUser): Promise<myUser> {
        try {
            // @ts-ignore
            const myConnecpool = await pool.connect()
            const mySQL = `UPDATE users SET name_TheUser = $2, myFirst_Name = $3, myLast_Name = $4, myPasswordValDigest = $5 WHERE id = $1 RETURNING *`

            const Output = await myConnecpool.query(mySQL, [
                myU.id,
                myU.name_TheUser,
                myU.myFirst_Name,
                myU.myLast_Name,
                myU.myPassword_Value,
            ])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`Could not update user ${myU.id}. Error: ${err}`)
        }
    }

    async myUserDelete(id: number): Promise<myUser> {
        try {
            // @ts-ignore
            const myConnecpool = await DBpool.connect()
            const mySQL = 'DELETE FROM myUser WHERE id=($1)'
            const Output = await myConnecpool.query(mySQL, [id])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`Could not delete user ${id}. Error: ${err}`)
        }
    }
}