import React, { useState } from 'react';

const affirmations = [
    "You are worthy of all the good things that happen to you.",
    "You are enough just as you are.",
    "You are capable of achieving your goals.",
    "You deserve to be happy.",
    "You are strong and resilient.",
    "You are loved and appreciated.",
    "You can handle anything that comes your way.",
    "You are growing and improving every day.",
    "You bring value to the world.",
    "You are exactly where you need to be."
];

const DailyAffirmation = () => {
    const [affirmation, setAffirmation] = useState(getRandomAffirmation());

    function getRandomAffirmation() {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        return affirmations[randomIndex];
    }

    const handleNewAffirmation = () => {
        setAffirmation(getRandomAffirmation());
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Daily Affirmation</h1>
            <p style={styles.affirmationText}>{affirmation}</p>
            <button onClick={handleNewAffirmation} style={styles.button}>
                New Affirmation
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: '2rem',
        color: '#333',
    },
    affirmationText: {
        fontSize: '1.5rem',
        color: '#555',
        margin: '20px 0',
        textAlign: 'center',
        maxWidth: '600px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default DailyAffirmation;
