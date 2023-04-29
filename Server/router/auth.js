const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken')

require('../db/Connection')
const User = require('../model/userSchema')

router.get('/', (req, res) => {
    res.send('Hello Home from router.js')
})


// Register Router
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name, !email, !phone, !work, !password, !cpassword) {
        console.log(email);
        res.status(422).json({ error: 'plz fill fields properly' })
    }

    try {
        // checking for same email in database
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            res.status(422).json({ error: 'Email already exists' })
        } else {
            // otherwise add new user
            const user = new User({ name, email, phone, work, password, cpassword })
            const addUser = await user.save()
            if (addUser) {
                res.status(201).json({ message: "User Created Successfully" })
            }
        }


    } catch (error) {
        console.log(error)
    }
})

// Login Router
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            // console.log(email);
            res.status(422).json({ error: 'plz fill fields properly' })
        }

        const UserLogin = await User.findOne({ email: email })
        // Email Verify
        if (UserLogin) {
            // Password verify
            const isMatch = await bcrypt.compare(password, UserLogin.password)

            const token = await UserLogin.generateAuthToken()
            console.log(token);
            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
            if (isMatch) {
                res.json({ message: 'Sign in successfully' })
            } else {
                res.json({ error: 'Invalid password' })
            }
        } else {
            res.json({ error: 'Invalid Email' })
        }

    } catch (error) {
        console.log(error)
    }
})



module.exports = router