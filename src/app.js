require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const visitorRouter = require("./routes/visitorRoutes");



async function connect(){
    try {
        await mongoose.connect(process.env.DATABASE_URL)
    } catch (e) {
        console.log(e)
    }
}
const corsOptions = {
    origin: ['http://localhost:8000','http://localhost:3000','http://localhost:3001']
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(cors(corsOptions))
app.use(express.json())
app.listen(8000);
app.use('/visitor',visitorRouter)
connect();