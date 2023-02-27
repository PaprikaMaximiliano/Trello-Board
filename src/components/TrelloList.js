import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloCard from './TrelloCard';
import TrelloAddButton from './TrelloAddButton';
import TrelloDeleteButton from './TrelloDeleteButton';

const ListContainer = styled.div`
    background-color: #ccc;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
    position: relative;
`;

const DeleteButtonContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;
const TrelloList = ({ title, cards, listID, listIndex }) => {

    const isListEmpty = () => {
        return cards.length === 0;
    }

    return (
        <Draggable draggableId={String(listID)} index={listIndex}>
            {(provided) => (
                <ListContainer
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    <h4>{title}</h4>
                    <DeleteButtonContainer>
                        <TrelloDeleteButton list isShownForList={isListEmpty()} listIndex={listIndex}/>
                    </DeleteButtonContainer>

                    <Droppable droppableId={String(listID)}>
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {cards.map((card, index) => (
                                    <TrelloCard
                                        key={card.id}
                                        index={index}
                                        listIndex={listIndex}
                                        text={card.text}
                                        id={card.id}
                                        listID={listID}
                                    />
                                ))}
                                {provided.placeholder}
                                <TrelloAddButton listID={listID} />
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
};

export default TrelloList;
