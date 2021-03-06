import React from 'react';

import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivete, 
  ...rest
}) {
  const { signed } = store.getState().auth;

  // if ( !signed && isPrivete ) {
  //   return <Redirect to="/" />
  // }

  // if ( signed && !isPrivete ) {
  //   return <Redirect to="/home" />
  // }

  // const Layout = signed ? DefaultLayout : AuthLayout;

  const Layout = DefaultLayout;

  return <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
}

RouteWrapper.protoTypes = {
  isPrivete: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivete: false,
};