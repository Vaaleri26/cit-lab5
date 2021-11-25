import React from "react";



const Button = ({onClick}) => {

  return (
    
    <button onClick={onClick} className="btn">
      Выполнить запрос
    </button>
    
  );
};

export default Button;
