import React from 'react';

// helpers
import styled from 'styled-components';
import { RoutesEnum } from '../../router/routes';
import { StateModel } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { IDateOfBirth } from '../../redux/reducers/answers';
import { getZodiacSign } from '../../helpers/getZodiacSign';
import { useNavigate, useParams } from 'react-router-dom';

// components
import Text from '../../components/Antd/Text';
import Button from '../../components/Antd/Button';
import DecisionHead from '../../assets/images/DecisionHead.png';
import DecisionBoth from '../../assets/images/DecisionBoth.png';
import DecisionHeart from '../../assets/images/DecisionHeart.png';
import { Space } from 'antd';
import { Content } from 'antd/es/layout/layout';

const DecisionResultPage = () => {
  const { result } = useParams();
  const navigate = useNavigate();

  const dateOfBirth = useSelector<StateModel, IDateOfBirth | null>(state => state.answers.dateOfBirth);

  const renderImage = () => {
    switch (result) {
      case 'head':
        return <img src={DecisionHead} alt={result} />;
      case 'heart':
        return <img src={DecisionHeart} alt={result} />;
      default:
        return <img src={DecisionBoth} alt={result} />;
    }
  };

  const renderResult = () => {
    switch (result) {
      case 'head':
        return '39%';
      case 'heart':
        return '49%';
      default:
        return '17%';
    }
  };

  return (
    <Content>
      {renderImage()}
      <Text size={16} weight={600} color='#FBFBFF'>
        Based on our data, {renderResult()} of {<Zodiac>{getZodiacSign(Number(dateOfBirth?.day), Number(dateOfBirth?.month))} </Zodiac>}
        people also make decisions with their head.
        {` But don't worry, we'll consider that while creating your guidance plan.`}
      </Text>
      <ButtonsWrapper size={10}>
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Button onClick={() => navigate(RoutesEnum.Email)}>Next</Button>
      </ButtonsWrapper>
    </Content>
  );
};

const Zodiac = styled.span`
  color: #f2c94c;
`;

const ButtonsWrapper = styled(Space)`
  margin-top: 50px;
  width: 100%;
  .ant-space-item {
    width: 100%;
    &:first-child {
      button {
        background: transparent;
        span {
          color: #fbfbff;
        }
      }
    }
    button {
      width: 100%;
      height: 48px;
      font-size: 18px;
      span {
        color: #6a3aa2;
      }
      &:hover {
        span {
          color: #fbfbff;
        }
      }
    }
  }
`;

export default DecisionResultPage;
