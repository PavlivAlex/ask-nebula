import React, { ReactNode, MouseEvent } from 'react';

// helpers
import styled from 'styled-components';

// components
import { Typography } from 'antd';

interface TextProps {
  size?: number;
  color?: string;
  weight?: number;
  margin?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const Text = ({ size = 14, weight = 400, color = '#4E4E4E', margin = '0', children, onClick }: TextProps) => {
  return (
    <StyledText size={size} weight={weight} color={color} margin={margin} onClick={onClick}>
      {children}
    </StyledText>
  );
};

const StyledText = styled(Typography)<{ weight: number; color: string; size: number; margin: string }>`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  margin: ${({ margin }) => margin};
  text-align: center;
`;
export default Text;
