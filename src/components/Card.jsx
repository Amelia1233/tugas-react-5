import React, { Children } from 'react';

const Card = ({ children }) => {
  return (
    <div style={{
      width: 200,
      height: 360,
      backgroundColor: '#8fb0b5',
      borderRadius: 10,
      padding: 10
    }}>{children}</div>
  );
};

export default Card;
