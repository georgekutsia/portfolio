import React, { useState } from 'react';

function CloseAllComponent({ setComponent }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
      <i  onClick={setComponent}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover} 
      className={`close-all-components  ${isHovered ? "fa-solid fa-circle-xmark fa-spin":"fa-regular fa-circle-xmark"}`}></i>
  );
}

export default CloseAllComponent;
