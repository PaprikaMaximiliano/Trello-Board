import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import { sort } from '../actions';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;
function App({ lists, dispatch }) {
    const onDragEnd = ({ destination, source, draggableId }) => {
        if (!destination) {
            return;
        }

        dispatch(
            sort(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId
            )
        );
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="App">
                <h2>Hello world</h2>
                <Droppable droppableId='all-lists' direction='horizontal' type='list'>
                    {(provided)=> (
                        <Container {...provided.droppableProps} ref={provided.innerRef}>
                            {lists.map((list, index) => (
                                <TrelloList
                                    listID={list.id}
                                    key={list.id}
                                    title={list.title}
                                    cards={list.cards}
                                    index={index}
                                />
                            ))}
                            <TrelloActionButton list />
                        </Container>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
