import express from 'express';

const app = express();
const port = 3001;


app.get('/',(req, res)=> {
    res.send("Hello Node Service")
})

app.listen(port, () => {
    console.log(`Service is runnig on post ${port}`)
})