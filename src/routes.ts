// for routes

import {Express} from 'express';
import { helloBook } from './controllers/books.controller';

function routes(app: Express) {
    app.get('/', helloBook);
}

export default routes;