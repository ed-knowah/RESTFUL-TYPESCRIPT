import express, {Application, Request, Response} from "express";
import cors from 'cors';

const app: express.Application = express();
const port: Number = 4040

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req:Request, res:Response)=>{
    res.json({
        msg: 'welcome'
    });
});

app.post("/post", (req:Request, res:Response)=>{
    const {name} = req.body;
    res.json({
        msg:`welcome to the post route  ${name}` 
    });
});

app.put("/update/:name", (req, res)=>{
    const toUpdate = req.params.name;
    res.json({
        msg: `you are about to update ${toUpdate}`
    });
})

app.delete("/delete/:name", (req,res)=>{
    const name = req.params.name;
    res.json({ 
        msg:`You have deleted user ${name}!!`
    });

});




app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
});

