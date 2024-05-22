import React from 'react';

const Button = ({ text, click }) => {
  return (
    <button onClick={click} className={`border border-accent border-solid border-2 rounded-md cursor-pointer relative lg:px-8 lg:py-3 px-6 py-3 group hover:z-20 text-text md:text-link text-linkMobile`}>
      {text}
      <div className={`absolute top-0 left-0 bottom-0 bg-accent w-0 group-hover:w-full transition-all duration-300 group-hover:-z-10`}></div>
    </button>
  );
};

export default Button;