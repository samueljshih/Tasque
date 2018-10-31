import React from 'react';

const UserInput = props => {
  var count = 0;
  const { sendMessage } = props;

  return (
    <input
      className="form-control"
      placeholder="Enter a message"
      type="text"
      id={count++}
      onKeyDown={e => (e.keyCode === 13 ? sendMessage(e.target.value) : null)}
    />
  );
};

export default UserInput;
