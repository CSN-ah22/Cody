import TrelloList from './trelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './trelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd'
import React, { Component } from 'react'

class App extends Component {

  onDragEnd = () => { //드래그 끝나면 할일 
  }

  render(){
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div>
        <h2>Hello Youtube</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
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
  }


const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}
const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);
