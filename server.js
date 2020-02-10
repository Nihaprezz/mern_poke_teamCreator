const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const teamsRouter = require('./routes/api/teams')

const app = express();

//CORS 
app.use(cors())

//Body Parser MiddleWare 
app.use(bodyParser.json())

//Mongoose Connection 
const dbLocation = require('./config/keys').mongoURI;

mongoose.connect(dbLocation,{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection; //pending connection we can use to see if the connection is sucessful or not
db.on('error', console.error.bind(console, 'connection error:')); //if any errors come up it will let us know.
db.once('open', () => console.log('MongoDB Connected....'))

//Use Routes 
app.use('/api/teams', teamsRouter) 


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on ${port}`))
