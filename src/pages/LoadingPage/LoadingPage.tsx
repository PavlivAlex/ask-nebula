import React from 'react';

// helpers
import styled from 'styled-components';
import { RoutesEnum } from '../../router/routes';
import { StateModel } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getZodiacSign } from '../../helpers/getZodiacSign';

// components
import Text from '../../components/Antd/Text';
import { Content } from 'antd/es/layout/layout';

const LoadingPage = () => {
  const navigate = useNavigate();

  const gender = useSelector<StateModel, string>(state => state.answers.gender);

  setTimeout(() => {
    navigate(RoutesEnum.Relationship);
  }, 3000);

  return (
    <Content>
      <Text size={22} weight={700} color='#FBFBFF'>
        {`We've`} helped 2,865,756 other <Zodiac>{getZodiacSign(20, 4)}</Zodiac> {gender} to find their perfect partner and we cant wait to
        help you too!
      </Text>
      <Text weight={600} color='#D2D1F9' margin='10px 0 0 0'>
        *as of 24 February 2023
      </Text>
      <Text color='white' margin='100px 0 0 0'>
        Connecting to database...
      </Text>
    </Content>
  );
};

const Zodiac = styled.span`
  color: #f2c94c;
`;

export default LoadingPage;
