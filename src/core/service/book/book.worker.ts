import QueryProxy from '@core/util/storage/queryProxy'
import {MBook} from '@core/models/book.model';

class BookWorker {
   
    qp: QueryProxy
    constructor() {
        this.qp = new QueryProxy(MBook)
    }
   
}
export default BookWorker