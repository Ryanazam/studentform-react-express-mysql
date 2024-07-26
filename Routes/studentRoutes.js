const express = require('express');
const { addStudentDetails } = require('../Controller/studentController');
const router = express.Router();
const jwt = require('jsonwebtoken');

const secretKey = 'ryan';

const verifyToken = (req, res, next) => {
    const token =req.header("Authorization").replace("Bearer ","");
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return res.status(500).json({ message: 'Failed to authenticate token' });
        req.adminId = decoded;
        next();
    });
};

router.post('/add', verifyToken, addStudentDetails);

module.exports = router;
