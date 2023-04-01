import React from 'react';

// helpers
import styled from 'styled-components';

// components
import SolidArrow from '../../../assets/icons/SolidArrow';
import { Select as AntdSelect } from 'antd';

interface SelectProps {
  value: any;
  options: any;
  placeholder: string;
  onChange: (option: any) => void;
}

const Select = ({ value, options, placeholder, onChange }: SelectProps) => {
  return (
    <StyledSelect value={value} allowClear placeholder={placeholder} options={options} onChange={onChange} suffixIcon={<SolidArrow />} />
  );
};

const StyledSelect = styled(AntdSelect)`
  width: 220px !important;
  .ant-select-selector {
    background: transparent !important;
    border-radius: ${({ theme }) => theme.inputBorderRadius};
    border: ${({ theme }) => theme.inputBorder}!important;
    &:hover,
    :focus {
      border: ${({ theme }) => theme.inputBorder} !important;
      box-shadow: none;
    }
  }
`;

export default Select;
