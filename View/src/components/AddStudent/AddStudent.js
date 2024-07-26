import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css';

const AddStudent = ({ token }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    const [message, setMessage] = useState('');

    const addStudent = () => {
        axios.post('http://localhost:5000/api/students/add', { name, age, grade }, {
            headers: { Authorization: token }
        })
            .then(() => {
                setMessage('Student added successfully');
            })
            .catch(() => {
                setMessage('Failed to add student');
            });
    };

    return (
        <div className="container">
            <h2>Add Student</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <button onClick={addStudent}>Add Student</button>
            <p>{message}</p>
        </div>
    );
};

export default AddStudent;
