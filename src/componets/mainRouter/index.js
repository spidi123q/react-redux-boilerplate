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


const Routes = (props) => {
  return (
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/test'} component={App} />
      </Switch>
  )
}

export default Routes