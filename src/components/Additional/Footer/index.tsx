import React from 'react';

// helpers
import styled from 'styled-components';
import { RoutesEnum } from '../../../router/routes';
import { isDarkScreen } from '../../../helpers/isDarkScreen';

// components
import Text from '../../Antd/Text';
import { Content } from 'antd/es/layout/layout';

interface FooterProps {
  path: string;
}

const Footer = ({ path }: FooterProps) => {
  return (
    <StyledFooter>
      {path === RoutesEnum.Home && (
        <>
          <Text size={12} margin='0 0 14px'>
            By continuing I agree with <StyledSpan>Privacy policy</StyledSpan> and <StyledSpan>Terms of use</StyledSpan>.
          </Text>
          <Text size={12}>Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012,</Text>
        </>
      )}
      <Text color={isDarkScreen(path) ? '#CDCDCD' : '#4F4F4F'}>Nicosia, Cyprus</Text>
    </StyledFooter>
  );
};

const StyledFooter = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 64px;
  @media (max-width: 440px) {
    padding-top: 0;
    justify-content: flex-end;
  }
`;

const StyledSpan = styled.span`
  color: #4f4f4f;
  text-decoration: underline;
`;

export default Footer;
