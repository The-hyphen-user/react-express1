
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const userRoute = require('./routes/users')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
dotenv.config();




app.use('/api/user', userRoute)



mongoose.connect(process.env.DB_CONNECT, { 
  useNewUrlParser: true, useUnifiedTopology: true 
})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));