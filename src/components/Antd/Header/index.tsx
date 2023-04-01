import React from 'react';

// helpers
import styled from 'styled-components';
import { RoutesEnum } from '../../../router/routes';
import { useNavigate } from 'react-router-dom';
import { isDarkScreen } from '../../../helpers/isDarkScreen';

// components
import Logo from '../../../assets/icons/Logo';
import Arrow from '../../../assets/icons/Arrow';
import LogoWhite from '../../../assets/icons/LogoWhite';
import { Layout } from 'antd';

interface HeaderProps {
  path: string;
}

const Header = ({ path }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <StyledHeader path={path}>
      {path !== RoutesEnum.Home && (
        // logic to skip loading screen when we going back
        <PrevIcon onClick={() => navigate(path === (RoutesEnum.Relationship as any) ? (RoutesEnum.DateOfBirth as any) : -1)}>
          <Arrow color={isDarkScreen(path) ? '#FAFAFA' : '#333333'} />
        </PrevIcon>
      )}
      {isDarkScreen(path) ? <LogoWhite /> : <Logo />}
    </StyledHeader>
  );
};

const StyledHeader = styled(Layout.Header)<{ path: string }>`
  position: relative;
  width: 100%;
  z-index: 3;
  height: auto;
  display: flex;
  align-items: center;
  background: transparent;
  justify-content: center;
  padding: 18px 0;
`;

const PrevIcon = styled.div`
  position: absolute;
  left: 162px;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  @media (max-width: 440px) {
    left: 12px;
  }
`;

export default Header;
