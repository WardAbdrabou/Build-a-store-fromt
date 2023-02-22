 // @ts-ignore
import DBpool from '../utilities/Database'
import { myOrder, myOrderForProduct } from '../myInterfaces/TheOrderInterface'

export class myStoreForOrder {
    createOrder(arg0: { product_id: number; quantity: number; user_id: number; status: string }) {
        throw new Error('Method not implemented.')
    }
    getOrders() {
        throw new Error('Method not implemented.')
    }
    getOrderById(arg0: number) {
        throw new Error('Method not implemented.')
    }
    updateOrder(arg0: { id: number; product_id: number; quantity: number; user_id: number; status: string }) {
        throw new Error('Method not implemented.')
    }
    deleteOrder(arg0: number) {
        throw new Error('Method not implemented.')
    }
    async haveYourOrder(): Promise<myOrder[]> {
        try {
            // @ts-ignore
            const myConnecpool = await DBpool.connect()
            const mySQL = 'SELECT * FROM myOrder'

            const Output = await myConnecpool.query(mySQL)
            myConnecpool.release()

            return Output.rows
        } catch (err) {
            throw new Error(`can not find myOrder. Error: ${err}`)
        }
    }

    async haveOrderBymyID(id: number): Promise<myOrder> {
        try {
            const mySQL = 'SELECT * FROM myOrder WHERE id=($1)'
            // @ts-ignore
            const myConnecpool = await DBpool.connect()

            const Output = await myConnecpool.query(mySQL, [id])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`can not find product ${id}. Error: ${err}`)
        }
    }

    async makeNewOrder(myO: myOrder): Promise<myOrder> {
        try {
            const mySQL =
                'INSERT INTO myOrder (myUser_VALID, myStatus) VALUES($1, $2) RETURNING *'
            // @ts-ignore
            const myConnecpool = await DBpool.connect()

            const Output = await myConnecpool.query(mySQL, [myO.myUser_VALID, myO.myStatus])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`would not add new order. Error: ${err}`)
        }
    }

    async doOrderUpdate(myO: myOrder): Promise<myOrder> {
        try {
            const mySQL = `UPDATE myOrder SET myUser_VALID = $2, myStatus = $3 WHERE id = $1 RETURNING *`
            // @ts-ignore
            const myConnecpool = await DBpool.connect()

            const Output = await myConnecpool.query(mySQL, [
                myO.id,
                myO.myUser_VALID,
                myO.myStatus,
            ])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`Could not update order ${myO.id}. Error: ${err}`)
        }
    }

    async myOrderDelete(id: number): Promise<myOrder> {
        try {
            // @ts-ignore
            const myConnection = await DBpool.connect()
            const mySQL = 'DELETE FROM products WHERE id=($1)'

            const Output = await myConnection.query(mySQL, [id])
            myConnection.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`Could not delete order ${id}. Error: ${err}`)
        }
    }

    async haveTheCurrentOrder(id: number) {
        try {
            // @ts-ignore
            const myConnection = await DBpool.connect()
            const mySQL = `SELECT *
                         FROM myOrder
                         WHERE myUser_VALID = ($1);`
            const Output = await myConnection.query(mySQL, [id])
            myConnection.release()

            return Output.rows
        } catch (err) {
            throw new Error(
                `would not find order for user ${id}. Error: ${err}`
            )
        }
    }

    async makeOrderForProduct(myPro: myOrderForProduct): Promise<myOrderForProduct> {
        try {
            const mySQL =
                'INSERT INTO order_products (myOrder_VAL_ID, myProduct_VAL_ID, myValQuantity) VALUES($1, $2, $3) RETURNING *'
            // @ts-ignore
            const myConnecpool = await DBpool.connect()

            const Output = await myConnecpool.query(mySQL, [
                myPro.myOrder_VAL_ID,
                myPro.myProduct_VAL_ID,
                myPro.myValQuantity,
            ])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`would not add product. Error: ${err}`)
        }
    }
}