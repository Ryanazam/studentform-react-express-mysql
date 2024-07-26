import React, { useState } from 'react'
import AdminLogin from "../components/AdminLogin/AdminLogin"
import AddStudent from "../components/AddStudent/AddStudent"


const AddStudentPage = () => {
    const [token, setToken] = useState('');

    return (
        <div>
            {!token ? (
                <AdminLogin setToken={setToken} />
            ) : (
                <AddStudent token={token} />
            )}
        </div>
    )
}
export default AddStudentPage


