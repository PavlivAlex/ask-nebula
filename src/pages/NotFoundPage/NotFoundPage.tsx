import React from 'react';

// helpers
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// components
import Text from '../../components/Antd/Text';
import Button from '../../components/Antd/Button';
import { Content } from 'antd/es/layout/layout';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <Text size={24} weight={600} color='white'>
        Sorry, something went wrong!
      </Text>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled(Content)`
  padding: 20px;
  background: ${({ theme }) => theme.bgGradient};
  ${({ theme }) => [theme.centerColumnSnippet, theme.fullWidthHeight]};
  button {
    margin-top: 20px;
    background: ${({ theme }) => theme.bgGradient};
    span {
      color: white;
    }
  }
`;

export default NotFoundPage;
