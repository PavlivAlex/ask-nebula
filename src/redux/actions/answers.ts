import { IDateOfBirth } from '../reducers/answers';

export enum ActionType {
  SET_GENDER = 'answers/SET_GENDER',
  SET_DECISION = 'answers/SET_DECISION',
  SET_IS_PARENT = 'answers/SET_IS_PARENT',
  SET_DATE_OF_BIRTH = 'answers/SET_DATE_OF_BIRTH',
  SET_SINGLE_PROBLEM = 'answers/SET_SINGLE_PROBLEM',
  SET_HAS_RELATIONSHIP = 'answers/SET_HAS_RELATIONSHIP',
  SET_IS_SINGLE_PARENT = 'answers/SET_IS_SINGLE_PARENT',
  SET_RELATIONSHIP_PROBLEM = 'answers/SET_RELATIONSHIP_PROBLEM',
}

export const answers = {
  setGender: (gender: string) => ({
    type: ActionType.SET_GENDER,
    payload: gender,
  }),
  setDateOfBirth: (dateOfBirth: IDateOfBirth) => ({
    type: ActionType.SET_DATE_OF_BIRTH,
    payload: dateOfBirth,
  }),
  setRelationship: (hasRelationship: boolean) => ({
    type: ActionType.SET_HAS_RELATIONSHIP,
    payload: hasRelationship,
  }),
  setIsParent: (isParent: boolean) => ({
    type: ActionType.SET_IS_PARENT,
    payload: isParent,
  }),
  setSingleIsParent: (isSingleParent: boolean) => ({
    type: ActionType.SET_IS_SINGLE_PARENT,
    payload: isSingleParent,
  }),
  setSingleProblem: (problem: string) => ({
    type: ActionType.SET_DECISION,
    payload: problem,
  }),
  setRelationshipProblem: (problem: string) => ({
    type: ActionType.SET_RELATIONSHIP_PROBLEM,
    payload: problem,
  }),
  setDecision: (decision: string) => ({
    type: ActionType.SET_SINGLE_PROBLEM,
    payload: decision,
  }),
};
