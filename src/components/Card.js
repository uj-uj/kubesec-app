import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      {/* Additional card content */}
    </div>
  );
}

export default Card;
