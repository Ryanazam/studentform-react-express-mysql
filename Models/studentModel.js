const db = require('../utils/database');

const addStudent = async (name, age, grade) => {
    try {
        const [result] = await db.query('INSERT INTO students (name, age, grade) VALUES (?, ?, ?)', [name, age, grade]);
        console.log(result)
        return result;

    } catch (error) {
        throw error;
    }
};
module.exports ={addStudent}
