import jwt from 'jsonwebtoken'

const mytokenSecret: string = process.env.VALUESECRET as string

export const theJWTCreating = ( id : number, name_TheUser :string): string => {
    return jwt.sign({ id, name_TheUser }, mytokenSecret)
}
