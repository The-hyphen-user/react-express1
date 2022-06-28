const express = require('express');
const cors = require('cors');
const axios = require('axios');
const JWT = require('jsonwebtoken')
const session = require('express-session');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const loginRoute = require('./Routes/loginRoute.js')
const bodyParser = require('body-parser');
//const authRoute = require('./routes/auth')
const dataRoute = require('./Routes/data')

const postRoutes = require('./Routes/posts')
const Data = require('./models/Data')

//const PORT = 5000;

const app = express();


app.use(cors());
// app.use(cookieParser());
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
dotenv.config();
//app.use(session({secret: "Shh, its a secret!"}));
//app.use(session({secret: process.env.COOCKIE_TOKEN_SECRET}));


// client.on('connect', function() {
//   console.log('Connected!');
// });


app.use('/api/login', loginRoute)

app.get('/api/data/:id', (req, res) => {


    res.send(req.params.id)
  })

  app.post('/api/data/:id', (req, res) => {
    const newData = ({data:req.params.id})
    console.log(newData)
    Data.create({data:req.params.id})
    res.send(req.params.id)
  })

app.use('/post/data', dataRoute);

  
app.use('/posts', postRoutes);


// app.get('/', (req, res) => {
//     console.log('triggered')
//     //const params = req.body.params;
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
// })

// mongoose.connect(process.env.DB_CONNECT,
//   {useUnifiedTopology: true, useNewUrlParser: true},
//   () => {console.log('mongooseDB connected')} 
//    )


//const DB_CONNECT = 'mongodb+srv://Reactexpress1:ExxNqoJjaCq7U13D@ontether.xnccz.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(
//   process.env.DB_CONNECT,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   },
//   () => {
//     console.log("mongdb is connected");
//   }
// );


// app.listen(PORT, () => console.log(`server running on ${PORT}`))




//const PORT = process.env.PORT|| 5000;

mongoose.connect('mongodb+srv://Reactexpress1:ExxNqoJjaCq7U13D@ontether.xnccz.mongodb.net/?retryWrites=true&w=majority', { 
  useNewUrlParser: true, useUnifiedTopology: true 
})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);