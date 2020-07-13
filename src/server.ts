
import App from './app';
import BookService from '@core/service/book/book.service';


const app = new App ([
    new BookService()
]);

app.listen();