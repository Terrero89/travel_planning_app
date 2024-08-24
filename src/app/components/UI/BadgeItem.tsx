import React from 'react'

interface Props {}
const BadgeItem = ({ content, color, children }) => {
    const badgeStyle = {
      position: "absolute",
      top: "-5px",
      right: "-20px",
      backgroundColor: color === "primary" ? "#007bff" : color,
      color: "white",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
    };
  
    const containerStyle = {
      position: "relative",
      display: "inline-block",
    };
  
    return (
      <div style={containerStyle}>
        {children}
        <div style={badgeStyle}>{content}</div>
      </div>
    );
  };
  
  export default BadgeItem;;