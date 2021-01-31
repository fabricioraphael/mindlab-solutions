import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import About from '../pages/About';
import BlogList from '../pages/BlogList';
import Postagem from '../pages/Postagem';
import Donate from '../pages/Donate';

import Profile  from '../pages/Profile/index';


export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivete />
      <Route path="/sobre-nos" exact component={About} />
      <Route path="/blog" exact component={BlogList} />
      <Route path="/postagem" exact component={Postagem} />
      <Route path="/doar" exact component={Donate} />

      <Route path="/register"  component={SignUp} />
      <Route path="/sing-in" exact component={SignIn} />

      <Route path="/dashboard"  component={Dashboard} isPrivete />
      <Route path="/profile"  component={Profile} isPrivete />

      <Route path="/"  component={() => <h1>404</h1>} />
    </Switch>
  );
}
