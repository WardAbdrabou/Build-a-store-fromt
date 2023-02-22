import dotenv from 'dotenv';
import { Pool } from 'pg'

dotenv.config()
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_myTEST_DB,
  POSTGRES_myDEV_DB,
  ENV,
} = process.env


let DBpool
console.log(ENV)

if(ENV === 'test') {
  DBpool = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_myTEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  })
}

if(ENV === 'dev') {
  DBpool = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_myDEV_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  })
}

export default DBpool