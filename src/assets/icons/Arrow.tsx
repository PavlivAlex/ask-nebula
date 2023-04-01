import React from 'react';

interface ArrowProps {
  color?: string;
}

const Arrow = ({ color = '#FAFAFA' }: ArrowProps) => {
  return (
    <svg width='9' cursor='pointer' height='16' viewBox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M9.00001 8L1.50001 15.5L0.450012 14.45L6.90001 8L0.450012 1.55L1.50001 0.500002L9.00001 8Z' fill={color} />
    </svg>
  );
};

export default Arrow;
