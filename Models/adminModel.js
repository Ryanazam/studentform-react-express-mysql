const db = require('../utils/database');

const findAdminByUsername = async (username) => {
    try {
        const results = await db.query('SELECT * FROM admins WHERE username = ?', [username]);
        console.log(results[0])
        return results[0];
    
    } catch (error) {
        throw error;
    }
};

module.exports = { findAdminByUsername };
