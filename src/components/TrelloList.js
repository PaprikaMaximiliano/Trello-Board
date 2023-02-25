import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from "./TrelloActionButton";
const TrelloList = ({ title, cards }) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map((card) => (
                <TrelloCard key={card.id} text={card.text} />
            ))}
            <TrelloActionButton/>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
    },
};

export default TrelloList;
