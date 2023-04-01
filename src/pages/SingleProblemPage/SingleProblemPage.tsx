import React from 'react';
// helpers
import { getAge } from '../../helpers/getAge';
import { RoutesEnum } from '../../router/routes';
import { StateModel } from '../../redux/reducers';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { answers as answersActions } from '../../redux/actions/answers';
import { StateModel as AnswersSateModel } from '../../redux/reducers/answers';

// components
import QuestionBlock from '../../components/Additional/QuestionBlock';

const SingleProblemPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const answers = useSelector<StateModel, AnswersSateModel>(state => state.answers);

  const handleAnswer = (answer: string) => {
    dispatch(answersActions.setSingleProblem(answer));
    navigate(RoutesEnum.Decision);
  };
  return (
    <QuestionBlock
      question={`Single ${answers.gender} ${answers.dateOfBirth ? getAge(answers.dateOfBirth) : ''} years ${
        answers.isSingleParent ? 'who have children' : ''
      } need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`}
      answers={[
        'I was unhappy with low things were going in my relationship',
        'I was unhappy with parts of my relationship, but some thing were working',
        'I was generally happy with my relationship',
        'I’ve never been in a relationship',
      ]}
      onAnswer={answer => handleAnswer(answer)}
    />
  );
};

export default SingleProblemPage;
