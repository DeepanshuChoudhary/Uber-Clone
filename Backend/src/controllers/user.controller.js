const userModel = require('../models/user.model');
const userService = require('../service/user.service');
const { validationResult } = require('express-validator')
const blackListTokenModel = require('../models/blackListToken.model');

const registerUser = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()
        });
    }

    // console.log(req.body);

    const { fullName, lastName, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password)

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const user = await userService.createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword
    })

    const token = user.generateAuthToken()



    res.status(201).json({
        token, user
    });

}

const loginUser = async (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if(!user) {
        return res.status(401).json({
            message: 'Invalid email or password'
        });
    }

    const isMatch = await user.comparePassword(password)
    
    if(!isMatch) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({
        token, user
    })

}

const getUserProfile = async(req, res) => {

    // console.log('Hello world user.controller.js')

    res.status(200).json(req.user);

}

const logoutUser = async (req, res, next) => {
    res.clearCookie('token')

    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blackListTokenModel.create({ token })

    res.status(200).json({
        message: "Logged out"
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    logoutUser
}