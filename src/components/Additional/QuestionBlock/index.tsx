import React from 'react';

// helpers
import styled from 'styled-components';

// components
import Text from '../../Antd/Text';
import Button from '../../Antd/Button';
import { Space } from 'antd';
import { Content } from 'antd/es/layout/layout';

interface QuestionBlockProps {
  question: string;
  answers: string[];
  onAnswer: (answer: string) => void;
}

const QuestionBlock = ({ question, answers, onAnswer }: QuestionBlockProps) => {
  return (
    <Content>
      <Text size={22} weight={700} color='#1A1A1A'>
        {question}
      </Text>
      <ButtonsWrapper size={20}>
        {answers.map((answer: string) => {
          return (
            <Button onClick={() => onAnswer(answer)} key={answer}>
              {answer}
            </Button>
          );
        })}
      </ButtonsWrapper>
    </Content>
  );
};

const ButtonsWrapper = styled(Space)`
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
  .ant-space-item {
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export default QuestionBlock;
