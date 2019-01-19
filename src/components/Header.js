import React from 'react';


const Header = (props) => {
  return(
    <header>
      <h1>To Do List</h1>
      <h2>{props.tasks.length}</h2>
    </header>
  );
}


export default Header;
