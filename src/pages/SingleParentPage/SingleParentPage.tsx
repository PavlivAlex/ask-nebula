import React from 'react';

// helpers
import { answers } from '../../redux/actions/answers';
import { RoutesEnum } from '../../router/routes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import QuestionBlock from '../../components/Additional/QuestionBlock';

const SingleParentPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const handleAnswer = (answer: string) => {
    if (answer === 'Yes') {
      dispatch(answers.setSingleIsParent(true));
    } else {
      dispatch(answers.setSingleIsParent(false));
    }
    navigate(RoutesEnum.SingleProblem);
  };
  return <QuestionBlock question={'Are you a single parent?'} answers={['Yes', 'No']} onAnswer={answer => handleAnswer(answer)} />;
};

export default SingleParentPage;
