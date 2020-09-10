import React from 'react';

const Calculator = props => {
  // Logic here
  return ( null
    // JSX here
  );
};

const Interface = props => {
  return (
    // JSX here
    <div>
      <h1 className="title">Welcome to my Calculator!</h1>
      <form>
        <label for="input-1">Input 1:</label>
        <input type="number" id="input-1"></input>
      </form>
      <form>
        <label for="operations">Operation:</label>
        <select id="operations">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option></select>
      </form>
      <form>
        <label for="input-2">Input 2:</label>
        <input type="number" id="input-2"></input>
      </form>
      <p id="bttn">Calculate!</p>
    </div>
  );
};

export default Interface;