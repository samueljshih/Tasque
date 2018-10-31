import React from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    card: monitor.getItem()
  };
}

class Target extends React.Component {
  render() {
    const { connectDropTarget, hovered, card } = this.props;
    const backgroundColor = hovered ? '#43C574' : '#3E4E59';

    return connectDropTarget(
      <div className="target" style={{ background: backgroundColor }} />
    );
    // return <div className="target">Target</div>;
  }
}

export default DropTarget('card', {}, collect)(Target);
