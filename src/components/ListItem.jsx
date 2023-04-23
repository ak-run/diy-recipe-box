import React, { useState } from 'react';
import './Components.css';
//this is a component that accepts prop and turns it into a list item, it also accepts handleClick function that removes items from the list

const ListItem = (props) => {
  //adding functionality to cross items on the shopping list and uncross them
  const [isCrossed, setIsCrossed] = useState(false);
  const handleClick = (event) => {
    if (event.target.tagName !== "BUTTON") {
      setIsCrossed(!isCrossed);
    }
  };
  

  const handleRemove = () => {
    props.handleRemove(props.name);
  };
  
  const listItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    zIndex: 1
  };

  const itemTextStyle = {
    textDecoration: isCrossed ? "line-through" : "none",
  }

  return (
    <li style={listItemStyle}>
      <span style={itemTextStyle} onClick={handleClick}>{props.name}</span>
      <button className='RemoveButton' onClick={handleRemove}>
        <span className="RemoveButton__text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
          </svg>
        </span>
      </button>
    </li>
  );
};

export default ListItem;
