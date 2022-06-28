const express = require('express');
const router = express.Router();
const axios = require('axios');
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const mongoose = require('mongoose');

router.get('/', (req, res) => {
  res.send('hello back')
})

router.post('/', (req, res) => {

})



router.post('/add', async (req, res) => {
  const { username, password } = req.body


  const dupUser = await User.findOne({ username })
  if (dupUser) return res.status(400)
  //console.log(req.body.User.password)
  //console.log(username)
  // const name = req.body.User.username
  // const pass = req.body.User.password


  const newUser = new User({ username, password })
  console.log(newUser)

  try {
    await newUser.save();

    res.send(newUser.data);
  } catch (error) {
    res.send('error: ');
  }
  // const newUser = await User.create({
  //   username,
  //   password,
  // })
  // res.status(200).json(newUser)

})





router.get('/', (req, res) => {

})


/*
router.get('/', (req, res) => {

    //res.send({message :'going through middleware'})
    const body = req.body
    res.send(body)
})

router.get("/register", async (req, res) => {
    try {
      const newUser = new User({
        username: "tahmid",
        password: "123456",
      });
  
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/add',  (req, res) => {
    const { username, password } = req.body

    console.log('user: ', username, '\npass: ', password)
    if (!username || !password) {
        res.status(400)
        console.log('user: ', username, '\npass: ', password)
        throw new Error('Please add all fields')
    }

    // const dupUser = await User.findOne({ username })
    // if (dupUser) return res.status(400).then(window.alert('username taken'))
    // Check if user exists

    // const salt = await bcrypt.genSalt(10)
    // const hashedPass = await bcrypt.hash(password, salt)
    console.log('got herr')

    // Create user
    // const user = await User.create({
    //     username,
    //     password: hashedPass,
    // })

    // async function createNewUser() {
    //     const user = new User({ 
    //         username: username, 
    //         password: hashedPass, 
    //     }); 
    //     const result = await user.save(); 
    //     console.log(result);
    // }
    // createNewUser();
})
*/


module.exports = router