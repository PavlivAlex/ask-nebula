import React from 'react';

// helpers
import { answers } from '../../redux/actions/answers';
import { RoutesEnum } from '../../router/routes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import QuestionBlock from '../../components/Additional/QuestionBlock';

const ParentPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const handleAnswer = (answer: string) => {
    if (answer === 'Yes') {
      dispatch(answers.setIsParent(true));
    } else {
      dispatch(answers.setIsParent(false));
    }
    navigate(RoutesEnum.RelationshipProblem);
  };
  return <QuestionBlock question={'Are you a parent?'} answers={['Yes', 'No']} onAnswer={answer => handleAnswer(answer)} />;
};

export default ParentPage;
