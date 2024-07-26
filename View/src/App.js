import React, { useState } from 'react';
import './App.css'
import ImageUpload from './components/ImageUpload/ImageUpload';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AddStudentPage from './Page/addStudentPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'students':
                return <AddStudentPage/>;
             
            case 'image':
                return <ImageUpload/>

            default:
                return <Home />;
        }
    };

    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} />
            {renderPage()}
        </div>
    );

    
    
}

export default App;
