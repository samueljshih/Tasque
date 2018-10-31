import React from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    console.log('Dragging!');
    return props.item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(props.item.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class Item extends React.Component {
  render() {
    const { item, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className="item" style={{ opacity }}>
        <span className="itemName">{item.name}</span>
      </div>
    );
  }
}

export default DragSource('item', itemSource, collect)(Item);
