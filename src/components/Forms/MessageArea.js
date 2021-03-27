import React from 'react';
import '../../styles/MessageArea.css';

const MessageArea = ({ id, name, label, placeholder, value, handleChange }) => {
  return (
    <div className="MessageArea">
      <label className="MessageArea-Label" htmlFor={id}>{label}</label>
      <textarea
        className="MessageArea-Body"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange} />
    </div>
  );
}

export default MessageArea;