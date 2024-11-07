import React from 'react';

const Square = ({ onClick, value }) => {
  return (
    <div 
      onClick={onClick}  // Attach the onClick event handler to the div
      style={{
        border: "1px solid black", 
        height: "100px", 
        width: "100px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        fontSize: "24px",
        cursor: "pointer"  // Add a pointer cursor for better UX
      }} 
      className='square'
    >
      <h5>{value}</h5>  {/* Display the value (X or O) inside the square */}
    </div>
  );
};

export default Square;
