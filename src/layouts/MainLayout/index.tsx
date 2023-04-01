import React, { ReactNode } from 'react';

// helpers
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { isDarkScreen } from '../../helpers/isDarkScreen';

// components
import Header from '../../components/Antd/Header';
import Footer from '../../components/Additional/Footer';
import { Content } from 'antd/es/layout/layout';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <LayoutContainer path={pathname}>
      <Header path={pathname} />

      <LayoutContent>{children}</LayoutContent>
      <Footer path={pathname} />
    </LayoutContainer>
  );
};

const LayoutContainer = styled(Content)<{ path: string }>`
  padding: 0 14px 14px 14px;
  background: ${({ path, theme }) => (isDarkScreen(path) ? theme.bgGradient : '#fff0f0')};
  ${({ theme }) => [theme.centerColumnSnippet, theme.fullWidthHeight]};
`;
const LayoutContent = styled(Content)`
  flex: initial !important;
  padding-top: 20px;
  .ant-layout-content:first-child {
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default MainLayout;
