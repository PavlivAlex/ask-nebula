import { IDateOfBirth } from '../redux/reducers/answers';

export const getAge = ({ day, month, year }: IDateOfBirth) => {
  const birthDate = new Date(`${day}/${Number(month)}/${year}`);
  const now: any = new Date();

  const diffMilliseconds = now - Number(birthDate);
  const diffYears = diffMilliseconds / (1000 * 60 * 60 * 24 * 365);
  return Math.floor(diffYears);
};
