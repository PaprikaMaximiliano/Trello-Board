import React from 'react';
import TrelloList from "./TrelloList";
import {connect} from "react-redux";
import TrelloActionButton from "./TrelloActionButton";

function App({lists}) {
  return (
    <div className="App">
      <h2>Hello world</h2>
        <div style={styles.container}>
            {lists.map(list => <TrelloList key={list.id} title={list.title} cards={list.cards}/>)}
            <TrelloActionButton list/>
        </div>
    </div>
  );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps) (App);
