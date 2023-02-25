import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import {sort} from "../actions";
function App({ lists,dispatch }) {

    const onDragEnd = ({ destination, source, draggableId}) => {
        if(!destination) {
            return;
        }

        dispatch(sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        ))


    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="App">
                <h2>Hello world</h2>
                <div style={styles.container}>
                    {lists.map((list) => (
                        <TrelloList
                            listID={list.id}
                            key={list.id}
                            title={list.title}
                            cards={list.cards}
                        />
                    ))}
                    <TrelloActionButton list />
                </div>
            </div>
        </DragDropContext>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
};

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
