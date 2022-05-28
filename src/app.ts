import express, {Request, Response} from 'express';
import routes from './routes';

const app = express();
const port = 3000;

// middleware
app.use(express.json())

routes(app);

app.listen(port, () => {
    console.log(`server running on PORT ${port}`)
})