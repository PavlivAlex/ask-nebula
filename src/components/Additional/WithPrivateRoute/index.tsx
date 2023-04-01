import React from 'react';

// helpers
import { Navigate } from 'react-router-dom';
import { StateModel } from '../../../redux/reducers';
import { RoutesEnum } from '../../../router/routes';
import { useSelector } from 'react-redux';

interface WithPrivateRouteProps {
  enhancedFunction: () => void;
}

const WithPrivateRoute = () => (WrappedComponent: any) => {
  const EnhancedComponent = (props: WithPrivateRouteProps) => {
    const relationship = useSelector<StateModel, any>(state => state.answers.hasRelationship);

    const enhancedProps = { ...props, enhancedFunction: () => {} };
    return relationship ? <WrappedComponent {...enhancedProps} /> : <Navigate to={RoutesEnum.SingleParent} />;
  };

  return EnhancedComponent;
};

export default WithPrivateRoute;
