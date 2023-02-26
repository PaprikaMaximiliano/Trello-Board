import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TrelloActionButton from './TrelloActionButton';
import TrelloCard from './TrelloCard';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #ccc;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`;
const TrelloList = ({ title, cards, listID }) => {
    return (
        <ListContainer>
            <h4>{title}</h4>
            <Droppable droppableId={String(listID)}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {cards.map((card, index) => (
                            <TrelloCard
                                key={card.id}
                                index={index}
                                text={card.text}
                                id={card.id}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <TrelloActionButton listID={listID} />
        </ListContainer>
    );
};

export default TrelloList;
