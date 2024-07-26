const { addStudent } = require('../Models/studentModel');

const addStudentDetails = async(req, res) => {
    const { name, age, grade } = req.body;
    console.log(name,age)
    
    const insertStudent =  addStudent(name, age, grade);
    if (insertStudent) {
        res.json({ message: 'Student added successfully' });
    }
else{
     
    return res.status(500).json({ message: 'Database error' });
        

}
   
    
};

module.exports = { addStudentDetails };
