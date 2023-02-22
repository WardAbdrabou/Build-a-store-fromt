// @ts-ignore
import DBpool from '../utilities/Database'
import myProduct from '../myInterfaces/TheProductInterface'

export class myStoreForProduct {
    static myProductDelete(myIdProduct: number) {
        throw new Error('Method not implemented.')
    }
    deleteProduct(myIdProduct: number) {
        throw new Error('Method not implemented.')
    }
    async haveALLProduct(): Promise<myProduct[]> {
        try {
            // @ts-ignore
            const myConnecpool = await DBpool.connect()
            const mySQL = 'SELECT * FROM myProduct'

            const Output = await myConnecpool.query(mySQL)
            myConnecpool.release()

            return Output.rows
        } catch (err) {
            throw new Error(`Could not get myProduct. Error: ${err}`)
        }
    }

    async haveProductBymyID(id: number): Promise<myProduct> {
        try {
            const mySQL = 'SELECT * FROM myProduct WHERE id=($1)'
            // @ts-ignore
            const myConnecpool = await DBpool.connect()

            const Output = await myConnecpool.query(mySQL, [id])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`Could not find product ${id}. Error: ${err}`)
        }
    }

    async makeNewProduct(myPro: myProduct): Promise<myProduct> {
        try {
            const mySQL =
                'INSERT INTO products (myName, myPrice, myCategory, url, myDescription) VALUES($1, $2, $3, $4, $5) RETURNING *'
            // @ts-ignore
            const myConnecpool = await DBpool.connect()

            const Output = await myConnecpool.query(mySQL, [
                myPro.myName,
                myPro.myPrice,
                myPro.myCategory,
                myPro.url,
                myPro.myDescription,
            ])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(
                `would not add new product ${myPro.myName}. Error: ${err}`
            )
        }
    }

    async doProductUpdate(myPro: myProduct): Promise<myProduct> {
        try {
            const mySQL = `UPDATE myProduct SET myName = $2, myPrice = $3, myCategory = $4 WHERE myID = $1 RETURNING *`
            // @ts-ignore
            const myConnecpool = await DBpool.connect()
            const Output = await myConnecpool.query(mySQL, [
                myPro.id,
                myPro.myName,
                myPro.myPrice,
                myPro.myCategory,
            ])
            myConnecpool.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`Could not update product ${myPro.id}. Error: ${err}`)
        }
    }

    async myProductDelete(id: number): Promise<myProduct> {
        try {
            const mySQL = 'DELETE FROM myProduct WHERE myID=($1)'
            // @ts-ignore
            const myConnection = await DBpool.connect()

            const Output = await myConnection.query(mySQL, [id])
            myConnection.release()

            return Output.rows[0]
        } catch (err) {
            throw new Error(`would not delete product ${id}. Error: ${err}`)
        }
    }
}