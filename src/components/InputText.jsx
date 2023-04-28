import React, { useState, useRef } from 'react';
//component to take user input and add items to the shopping list
export const InputText = (props) => {
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== '') { // Check if value is not empty or whitespace
      props.handleSubmit(value);
      setValue('');
      //after clicking the button the focus goes to input that has a ref inputRef
      inputRef.current.focus();
    }
  };

//returning a form containing a text input and a submit button with an onSubmit event that calls handleSubmit function with the current value of the input as argument
  return (
    <div className='AddItemBox'>
    <form onSubmit={handleSubmit}>
      <input 
        className='ItemInput'
        type="text" 
        aria-label='Type to add an item to your shopping list'
        placeholder="Add an Item"
        value={value} 
        onChange={e => setValue(e.target.value)}
        ref={inputRef}
      />
      <p></p>
    <button 
      className="btn btn-primary"
      onClick={handleSubmit}
      value={value} 
      onChange={e => setValue(e.target.value)}
      >
      Add
      </button>
      </form>
    </div>
  );
};