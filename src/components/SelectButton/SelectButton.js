import React from 'react';

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      className='selectButton'
      style={{
        backgroundColor: selected ? '#6667AB' : '',
        color: selected ? 'black' : '',
        fontWeight: selected ? 700 : 500,
        '&:hover': {
          backgroundColor: '#6667AB',
          color: 'black',
        },
      }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default SelectButton;
