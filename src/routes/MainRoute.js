import React        from 'react';
import {
  Route,
  Switch
}                   from 'react-router';
import {
  Home,
  Login
}                   from '../pages';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default MainRoutes;
