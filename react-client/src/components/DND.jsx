import React from 'react';
import Item from './Item.jsx';
import Target from './Target.jsx';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Card from './Card.jsx';
import update from 'immutability-helper';

var count = 0;

class DND extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      cards: []
    };

    this.moveCard = this.moveCard.bind(this);
  }

  deleteItem(id) {
    this.setState(prevState => {
      let cards = prevState.cards;
      let index = cards.findIndex(cards => cards.id === id);

      cards.splice(index, 1);

      return { cards };
    });
    console.log('Deleting id: ' + id);
  }

  addTask(task) {
    if (task.value === '') {
      return;
    }

    var newTask = {
      id: count++,
      text: task.value
    };

    this.setState({
      cards: [...this.state.cards, newTask]
    });

    task.value = '';
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    );
  }

  render() {
    return (
      <div className="taskContainer">
        <div className="taskList">
          <h2>Tasques</h2>
          <input
            placeholder=" Add a tasque"
            onKeyDown={e => (e.keyCode === 13 ? this.addTask(e.target) : null)}
            maxlength="30"
          />
          <div className="allTasks">
            {this.state.cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
                handleDrop={id => this.deleteItem(id)}
                card={card}
              />
            ))}
          </div>
        </div>
        <div className="targetContainer">
          <div className="target">
            <h2>Finished</h2>
            <Target />
          </div>
        </div>
      </div>
    );
  }
}

// React DND Context
export default DragDropContext(HTML5Backend)(DND);
