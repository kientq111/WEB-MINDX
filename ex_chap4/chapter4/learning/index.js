const express = require('express');

const app = express();
const port = 3002;
const mangaRouter = require('./router/mangaRouter');
const userRounter = require('./router/userRounter');

app.use(express.json());
app.use('/api/manga/', mangaRouter);
app.use('/api/user', userRounter);
// app.get('/user/:id', (req, res) => {
//     res.send('Hello user!!');
// });

app.listen(port, () => {
    console.log('Express example listening at port ', port);
})