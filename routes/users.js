const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



router.post('/add', async (req, res) => {
    const { email, username, password } = req.body

    if (!email || !username || !password) {
        res.sendStatus(400)
        //throw new Error('Please add all fields')
    } else {

        const dupUser = await User.findOne({ email })
        if (dupUser) {
            console.log('dup user')
        }
        if (dupUser) return res.status(400)

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //const newUser = new User({ email, username, password: hashedPassword })



        const newUser = await User.create({ email, username, password: hashedPassword })
        console.log(newUser)
        if (newUser) {
            const token = (newUser._id, process.env.JWT_SECRET, {
                expiresIn: '30d',
            })
            res.status(201).json({

                _id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                token: token,
                //generateToken(user._id),
            })
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    } else {
        console.log('req.body')
        res.sendStatus(400)
        //throw new Error('Invalid credentials')
    }
})


module.exports = router