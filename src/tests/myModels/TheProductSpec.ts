import { myStoreForProduct } from '../../models/myProduct'

const MyOwnStore = new myStoreForProduct()

describe('The Model of Product', () => {
    it('would do new a product', async () => {
        const Output = await MyOwnStore.makeNewProduct({
            myName: 'The-Test-pro',
            myPrice: 60.5,
            myCategory: 'myCategory Test',
            myDescription: '',
            url: ''
        })
        expect(Output).toEqual({
            id: 1,
            myName: 'The-Test-pro',
            myPrice: '60.50',
            myCategory: 'myCategory Test',
            myDescription: '',
            url: ''
        })
    })

        it('would update a my product', async () => {
            const Output = await MyOwnStore.doProductUpdate({
                id: 1,
                myName: 'The-Test-pro 2',
                myPrice: 70.50,
                myCategory: 'my New Category',
                myDescription: '',
                url: ''
            })
            expect(Output).toEqual({
                id: 1,
                myName: 'The-Test-pro 2',
                myPrice: '70.50',
                myCategory: 'my New Category',
                myDescription: '',
                url: ''
            })
        })

            it('would return a list of product', async () => {
                const Output = await MyOwnStore.haveALLProduct()
                expect(Output).toEqual([
                    {
                    id : 1 ,
                    myName: 'The-Test-pro 2',
                    myPrice: '70.50',
                    myCategory: 'my New Category',
                    myDescription: '',
                    url: ''
                    },

                ])
            })

            it('would return the correct product', async () => {
                const Output = await MyOwnStore.haveProductBymyID(1)
                expect(Output).toEqual({
                    id : 1,
                    myName: 'The-Test-pro 2',
                    myPrice: '70.50',
                    myCategory: 'my New Category',
                    myDescription: '',
                    url: ''
                })
                
            })

            it('would delete the product', async () => {
                await MyOwnStore.myProductDelete(1)
                const Output = await MyOwnStore.haveALLProduct()

                expect(Output).toEqual([])
            })
        

    }) 