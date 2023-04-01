import answers from './answers';

import { combineReducers } from 'redux';

import { StateModel as AnswersStateModel } from './answers';

export interface StateModel {
  answers: AnswersStateModel;
}

export const root = combineReducers({
  answers,
});
