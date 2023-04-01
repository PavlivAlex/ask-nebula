import React from 'react';

// helpers
import { answers } from '../../redux/actions/answers';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import QuestionBlock from '../../components/Additional/QuestionBlock';
import { RoutesEnum } from '../../router/routes';

const DecisionPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const handleAnswer = (answer: string) => {
    dispatch(answers.setDecision(answer));
    navigate(`${RoutesEnum.Decision}/${answer.toLowerCase()}`);
  };
  return (
    <>
      <QuestionBlock
        question={'Do you make decisions with your head or your heart?'}
        answers={['Heart', 'Head', 'Both']}
        onAnswer={answer => handleAnswer(answer)}
      />
    </>
  );
};

export default DecisionPage;
