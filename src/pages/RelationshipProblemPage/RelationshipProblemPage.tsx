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

const RelationshipProblemPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const answers = useSelector<StateModel, AnswersSateModel>(state => state.answers);

  const handleAnswer = (answer: string) => {
    dispatch(answersActions.setSingleProblem(answer));
    navigate(RoutesEnum.Decision);
  };
  return (
    <QuestionBlock
      question={`${answers.gender} ${answers.dateOfBirth ? getAge(answers.dateOfBirth) : ''} years ${
        answers.isParent ? 'who have children' : ''
      } need a slightly different approach to improve their relationship. Which statement best describes you?`}
      answers={[
        'I’m very unhappy with how things are going in my relationship',
        'I’m unhappy with parts of my relationship, but some things are working well',
        'I’m generally happy in my relationship',
      ]}
      onAnswer={answer => handleAnswer(answer)}
    />
  );
};

export default RelationshipProblemPage;
