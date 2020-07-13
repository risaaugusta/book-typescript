import express from "express";
import { IMoklet } from "@core/service/book/book.service";

const app = express();
const port = process.env.PORT || 3000;
  

class App {
    
    app : express.Application;

    constructor(_c:IMoklet[]) {
        this.app = express();
        this.initController(_c);
    }

    private async initController(_c:IMoklet[]) {

        _c.forEach((_ct) =>{
            this.app.use('/',_ct.r);
        })
    }

    public async listen() {
        this.app.listen(3000, () => {
            console.log("App running on port 3000");
        })
    }
}

app.get('/',function(req,res)
{
    res.sendFile(__dirname + '/index.html');
});



export default App;
