import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Hello server');
});

app.listen(port, () => {
    console.log(`server running on PORT ${port}`)
})