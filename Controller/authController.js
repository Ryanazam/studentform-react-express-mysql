const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findAdminByUsername } = require('../Models/adminModel');


const secretKey = 'ryan';

const login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username,password)
    const results = await findAdminByUsername(username);
    
    
    if (results.length > 0) {
            const admin = results[0];
            console.log(admin.username)
        if(password==admin.password) {
             
                    const token = jwt.sign({ id: admin.id }, secretKey, { expiresIn: '1h' });
                    res.json({ token });
                } else {
                    res.status(401).json({ message: 'Invalid under credentials' });
                }
        
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    
};

module.exports = { login };
