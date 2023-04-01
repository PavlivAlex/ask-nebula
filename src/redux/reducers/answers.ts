import { ActionType } from '../actions/answers';
import { IReduxAction } from '../../interfaces/redux';

export interface IDateOfBirth {
  day: string;
  year: string;
  month: string;
}

export interface StateModel {
  gender: string;
  dateOfBirth: IDateOfBirth | null;
  hasRelationship: boolean;
  isSingleParent: boolean;
  isParent: boolean;
  singleProblem: string;
  relationshipProblem: string;
  decision: string;
}

const initialState: StateModel = {
  gender: '',
  dateOfBirth: null,
  hasRelationship: false,
  isParent: false,
  isSingleParent: false,
  singleProblem: '',
  relationshipProblem: '',
  decision: '',
};

const answers = (state: StateModel = initialState, action: IReduxAction) => {
  const { payload, type } = action;

  switch (type) {
    case ActionType.SET_GENDER: {
      return { ...state, gender: payload };
    }
    case ActionType.SET_DATE_OF_BIRTH: {
      return { ...state, dateOfBirth: payload };
    }
    case ActionType.SET_HAS_RELATIONSHIP: {
      return { ...state, hasRelationship: payload };
    }
    case ActionType.SET_IS_PARENT: {
      return { ...state, isParent: payload };
    }
    case ActionType.SET_IS_SINGLE_PARENT: {
      return { ...state, isSingleParent: payload };
    }
    case ActionType.SET_SINGLE_PROBLEM: {
      return { ...state, singleProblem: payload };
    }
    case ActionType.SET_RELATIONSHIP_PROBLEM: {
      return { ...state, relationshipProblem: payload };
    }
    case ActionType.SET_DECISION: {
      return { ...state, decision: payload };
    }
    default:
      return state;
  }
};

export default answers;
