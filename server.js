const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const = require('')
// const = require('')

const PORT = 5000;

const app = express();

app.use(cors);




app.get('/api', (req, res) => {
    axios.get()
})



app.listen(PORT, () => console.log(`server running on ${PORT}`))