interface myOrder {
    id?: number
    myUser_VALID: number
    myStatus: string
}

interface myOrderForProduct {
    id?: number
    myOrder_VAL_ID: number
    myProduct_VAL_ID: number
    myValQuantity: number
}

export { myOrder, myOrderForProduct }