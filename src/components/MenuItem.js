import React from 'react';
import './MenuItem.css';

const MenuItem = ({ name, imageUrl }) => {
  console.log(imageUrl)
  return (
    <div className="menu-item">
      <img
        src={imageUrl}
        alt={name}
        // style={{
        //   borderRadius: '20px',
        //   width: '40vw', 
        //   height:'40vw',
        //   objectFit: 'cover',
        //   // Ensures the image takes full width of its container
        //   display: 'block',
        //    // Ensures the image behaves as a block element
        // }}
      />
      <p>{name}</p>
    </div>
  );
};

export default MenuItem;