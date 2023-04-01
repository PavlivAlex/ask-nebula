import React from 'react';

// helpers
import { answers } from '../../redux/actions/answers';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import QuestionBlock from '../../components/Additional/QuestionBlock';
import { RoutesEnum } from '../../router/routes';

const RelationshipPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const handleAnswer = (answer: string) => {
    if (answer === 'Single') {
      dispatch(answers.setRelationship(false));
      navigate(RoutesEnum.SingleParent);
    } else {
      dispatch(answers.setRelationship(true));
      navigate(RoutesEnum.Parent);
    }
  };
  return (
    <QuestionBlock
      question={'So we can get to know you better, tell us about your relationship status.'}
      answers={['Single', 'In a relationship']}
      onAnswer={answer => handleAnswer(answer)}
    />
  );
};

export default RelationshipPage;
