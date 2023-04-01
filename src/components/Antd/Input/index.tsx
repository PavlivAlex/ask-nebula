import React from 'react';

// helpers
import styled from 'styled-components';

// components
import { Input as AntdInput } from 'antd';

interface InputProps {
  placeholder: string;
  onChange: (e: any) => void;
}

const Input = ({ placeholder, onChange }: InputProps) => {
  return <StyledInput placeholder={placeholder} onChange={onChange} />;
};

const StyledInput = styled(AntdInput)`
  background: transparent;
  border: ${({ theme }) => theme.inputBorder};
  border-radius: ${({ theme }) => theme.inputBorderRadius};
  &:focus,
  :hover {
    border: ${({ theme }) => theme.inputBorder};
    box-shadow: none;
  }
`;

export default Input;
