import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';

const StudentList = () => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);


    useEffect(() => {
               
        const fetchStudents = async () => {
        
            try {
        
                const response = await axios.get('http://localhost:5000/api/card/image');
        
                setCards(response.data);
                console.log(response.data)
        
            } catch (error) {
        
                console.error('Error fetching students:', error);
        
            }
        
        };


        fetchStudents();
        
        
    }, []);
    

  

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="student-card-container">
            {cards?.map((card, index) => (
                <div className="student-card" key={index} onClick={() => handleCardClick(card)}  >
                    <img src={card.files} alt='phot' className="student-image" />
                    <div className="student-details">
                        
                    
                    </div>
                </div>
            ))}

            {selectedCard && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <img src={selectedCard.files} alt='phot' className="modal-image" />
                        {/* <h3>{selectedCard.caption}</h3> */}
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentList;
