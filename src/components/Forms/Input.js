import React from 'react';
import '../../styles/Input.css';

const Input = ({ id, name, label, placeholder, value, handleChange }) => {
  return (
    <div className="Input">
      <label className="Input-Label" htmlFor={id}>{label}</label>
      <input
        className="Input-Bubble"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange} />
    </div>
  )
}

export default Input;