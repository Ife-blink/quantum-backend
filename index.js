import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'


const app = express();

// Middleware for parsing JSON data
app.use(express.json());


let myData = [
    {id:1, color:"red", x:50, y: 200},
    {id:2, color:"orange", x:100, y: 200},
    {id:3, color:"yellow", x:150, y: 200},
    {id:4, color:"green", x:200, y: 200},
    {id:5, color:"blue", x:250, y: 200},
    {id:6, color:"purple", x:300, y: 200}
];

app.get("/app", (request, response) => {
    response.send("hello lovely person");
});


app.get('/', (req, res) => {
    res.send('this is the server for the Grant finder application 🚅');
})


app.post('/search', async (req, res) => {
    let data = req.body;
    //let response = await search(`${data}`, `${data.description}`, `${data.duration}`, `${data.teamsize}`, `${data.blockchain}`, `${data.traction}`)
    res.status(200).json({ message: `${data.name}` });
  })

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})