const express = require('express');
const cors = require('cors');
const axios = require('axios');
const JWT = require('jsonwebtoken')
// const = require('')

const PORT = 5000;

const app = express();

app.use(cors());


app.get('/:id', (req, res) => {
    res.send(req.params.id)
  })

  app.get('/login', )

// app.get('/', (req, res) => {
//     console.log('triggered')
//     //const params = req.body.params;
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
// })



app.listen(PORT, () => console.log(`server running on ${PORT}`))