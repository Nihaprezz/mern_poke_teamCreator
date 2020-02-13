const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())


//MONGOOSE DB CONNECTION 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected...')
}).catch(err => console.log(err))
mongoose.set('useCreateIndex', true)


//ROUTES TO USE
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})