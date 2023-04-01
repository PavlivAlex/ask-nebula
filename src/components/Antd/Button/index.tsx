import React, { ReactNode, MouseEvent } from 'react';

// helpers
import styled from 'styled-components';

// components
import { Button as AntdButton } from 'antd';

type HtmlType = 'button' | 'submit' | 'reset' | undefined;
type ButtonType = 'primary' | 'dashed' | 'text' | 'link';

interface ButtonProps {
  type?: ButtonType;
  htmlType?: HtmlType;
  children: ReactNode;
  background?: string;

  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Button = ({
  type = 'primary',
  htmlType = 'button',
  children,
  background = '#EAEEF7',

  onClick,
}: ButtonProps) => {
  return (
    <StyledButton type={type} htmlType={htmlType} background={background} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(AntdButton)<{ background: string }>`
  border-radius: ${({ theme }) => theme.btnBorderRadius};
  border: 1px solid #e0e0e0;
  background: ${({ background }) => background};
  box-shadow: 2px 2px 6px rgba(84, 60, 151, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 64px;
  span {
    color: black;
    white-space: initial;
  }
  &:hover {
    background: ${({ theme }) => theme.bgGradient} !important;
    span {
      color: #fafafa;
    }
  }
`;

export default Button;
