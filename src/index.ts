import cors from 'cors'
import myRouterApi from './myRoutes/myIndex'
import  express  from 'express';


const app = express();
const port = 3000;

const myOptionsForCors = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

app.use(cors(myOptionsForCors))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/myApi', myRouterApi)

app.get('/',  (req: express.Request, res: express.Response) =>{
    res.redirect('/myApi')
})

app.listen(port, function () {
    console.log(`starting app on: ${port}`)
})

export default app