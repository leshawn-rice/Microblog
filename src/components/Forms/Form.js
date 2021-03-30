import React from 'react';
import { useState } from 'react';
import Input from './Input';
import MessageArea from './MessageArea';
import '../../styles/Form.css';

const Form = ({ INITIAL_DATA, inputs, buttonLabel, messages = [], submit }) => {
  const [formData, setFormData] = useState(INITIAL_DATA);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit(formData);
    setFormData(INITIAL_DATA);
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      {
        inputs.map(input => (
          <Input
            key={input.name}
            id={input.name}
            name={input.name}
            label={input.label}
            placeholder={input.placeholder}
            value={formData[input.name]}
            handleChange={handleChange} />
        ))
      }
      {
        messages.map(message => (
          <MessageArea
            key={message.name}
            id={message.id}
            name={message.name}
            label={message.label}
            placeholder={message.placeholder}
            value={formData[message.name]}
            handleChange={handleChange} />
        ))
      }
      <button>{buttonLabel}</button>
    </form>
  )
}

export default Form;