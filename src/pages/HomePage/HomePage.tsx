import React from 'react';

// helpers
import styled from 'styled-components';
import { answers } from '../../redux/actions/answers';
import { RoutesEnum } from '../../router/routes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import Text from '../../components/Antd/Text';
import Arrow from '../../assets/icons/Arrow';
import Button from '../../components/Antd/Button';
import MaleImage from '../../assets/images/Male.png';
import FemaleImage from '../../assets/images/Female.png';
import { Space } from 'antd';
import { Content } from 'antd/es/layout/layout';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const handleGenderChoise = (gender: string) => {
    dispatch(answers.setGender(gender));
    navigate(RoutesEnum.DateOfBirth);
  };

  return (
    <Content>
      <Text size={22} weight={700} color='#1A1A1A'>
        Understand Yourself and Improve Relationships With Astrology
      </Text>
      <Text margin='20px 0 40px'>1-Minute Personal Assessment</Text>
      <Text size={16} weight={700} margin='0 0 40px'>
        Select your gender:
      </Text>
      <Space size={18} align='end'>
        <GenderChoise>
          <img src={MaleImage} alt='male' />

          <Button onClick={() => handleGenderChoise('male')} background='#454895'>
            Male <Arrow />
          </Button>
        </GenderChoise>
        <GenderChoise>
          <img src={FemaleImage} alt='female' />

          <Button onClick={() => handleGenderChoise('female')} background='linear-gradient(125.02deg, #642B73 18.39%, #C6426E 81.83%)'>
            Female <Arrow />
          </Button>
        </GenderChoise>
      </Space>
    </Content>
  );
};

const GenderChoise = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  button {
    height: 50px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-between;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    span {
      color: white;
    }
  }
`;

export default HomePage;
