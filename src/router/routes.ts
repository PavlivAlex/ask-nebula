// helpers
import { IRoute } from '../interfaces/router';

// components
import HomePage from '../pages/HomePage/HomePage';
import ParentPage from '../pages/ParentPage/ParentPage';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import DecisionPage from '../pages/DecisionPage/DecisionPage';
import EmailFormPage from '../pages/EmailFormPage/EmailFormPage';
import DateOfBirthPage from '../pages/DateOfBirthPage/DateOfBirthPage';
import RelationshipPage from '../pages/RelationshipPage/RelationshipPage';
import SingleParentPage from '../pages/SingleParentPage/SingleParentPage';
import SingleProblemPage from '../pages/SingleProblemPage/SingleProblemPage';
import DecisionResultPage from '../pages/DecisionResultPage/DecisionResultPage';
import RelationshipProblemPage from '../pages/RelationshipProblemPage/RelationshipProblemPage';

export enum RoutesEnum {
  Home = '/',
  Email = '/email',
  Parent = '/parent',
  Loading = '/loading',
  Decision = '/decision',
  DateOfBirth = '/birthday',
  Relationship = '/relationship',
  SingleParent = '/single-parent',
  SingleProblem = '/single-problem',
  RelationshipProblem = '/relationship-problem',
}

export const routes: IRoute[] = [
  { path: RoutesEnum.Home, component: HomePage, title: 'Your gender' },
  { path: RoutesEnum.DateOfBirth, component: DateOfBirthPage, title: 'Your date of birth' },
  { path: RoutesEnum.Loading, component: LoadingPage, title: 'Loading...' },
  { path: RoutesEnum.Relationship, component: RelationshipPage, title: 'Relationship' },
  { path: RoutesEnum.Parent, component: ParentPage, title: 'Parent' },
  { path: RoutesEnum.SingleParent, component: SingleParentPage, title: 'Single parent' },
  { path: RoutesEnum.SingleProblem, component: SingleProblemPage, title: 'Single problem' },
  { path: RoutesEnum.RelationshipProblem, component: RelationshipProblemPage, title: 'Relationship problem' },
  { path: RoutesEnum.Decision, component: DecisionPage, title: 'Decision' },
  { path: `${RoutesEnum.Decision}/:result`, component: DecisionResultPage, title: 'Decision result' },
  { path: RoutesEnum.Email, component: EmailFormPage, title: 'Email form' },
];
