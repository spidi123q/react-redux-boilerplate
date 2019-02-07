import React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
import LoaderComponent from './../loaderComponent';

const App = Loadable({
  loader: () => import('../../container/appContainer'),
  loading: LoaderComponent
});
const Home = Loadable({
  loader: () => import('../../stories/home'),
  loading: LoaderComponent
});
const List = Loadable({
  loader: () => import('../../stories/list'),
  loading: LoaderComponent
});
const View = Loadable({
  loader: () => import('../../stories/view'),
  loading: LoaderComponent
});


const Routes = (props) => {
  return (
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/list/:index'} component={List} />
        <Route path={'/list'} component={List} />
        <Route path={'/view'} component={View} />
      </Switch>
  )
}

export default Routes