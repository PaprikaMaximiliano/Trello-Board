import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloList from './TrelloList';
import TrelloAddButton from './TrelloAddButton';
import { dragNDrop } from '../actions';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;
function App({ lists, dispatch }) {
    const onDragEnd = ({ destination, source, draggableId, type }) => {
        if (!destination) {
            return;
        }

        dispatch(
            dragNDrop(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId,
                type
            )
        );
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <h2>Trello-board</h2>
            <Droppable
                droppableId="all-lists"
                direction="horizontal"
                type="list"
            >
                {(provided) => (
                    <Container
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {lists.map((list, index) => (
                            <TrelloList
                                listID={list.id}
                                key={list.id}
                                title={list.title}
                                cards={list.cards}
                                listIndex={index}
                            />
                        ))}
                        {provided.placeholder}
                        <TrelloAddButton list />
                    </Container>
                )}
            </Droppable>
        </DragDropContext>
    );
}

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
