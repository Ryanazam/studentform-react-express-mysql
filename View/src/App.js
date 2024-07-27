import React, { useState } from 'react';
import './App.css'
import ImageUpload from './components/ImageUpload/ImageUpload';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AddStudentPage from './Page/addStudentPage';
import Card from "./components/Card/Card"

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
            case 'card':
                return <Card/>


            default:
                return <Home />;
        }
    };

    return (
        <div className='App'>
            <Navbar setCurrentPage={setCurrentPage} />
            {renderPage()}
        </div>
    );

    
    
}

export default App;
