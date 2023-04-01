import { RoutesEnum } from '../router/routes';

export const isDarkScreen = (path: string) => {
  return [RoutesEnum.Loading, '/decision/heart', '/decision/head', '/decision/both'].includes(path);
};
