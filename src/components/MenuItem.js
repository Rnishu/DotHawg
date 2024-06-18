import React from 'react';

const MenuItem = ({ name, imageUrl }) => {
  console.log(imageUrl)
  return (
    <div className="menu-item">
      <img
        src={imageUrl}
        alt={name}
        style={{
          borderRadius: '20px',
          width: '20vw', 
          height:'20vw',
          objectFit: 'cover',
          // Ensures the image takes full width of its container
          display: 'block', // Ensures the image behaves as a block element
        }}
      />
      <p style={{fontSize:"2vw", marginTop: '10px',color:"white" }}>{name}</p>
    </div>
  );
};

export default MenuItem;