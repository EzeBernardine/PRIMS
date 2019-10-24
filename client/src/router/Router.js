import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../component/pages/Landing';
import Profile from '../component/pages/Profile';
import AllPrisoners from '../component/pages/AllPrisoners';
import AddPrisoner from '../component/pages/AddPrisoner';
import PrisonerDetail from '../component/pages/PrisonerDetail';
// import NotFound from '../component/NotFound';

const Router = () => (
  <BrowserRouter>
    <div className='AppRoute'>
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/allprisoners" component={AllPrisoners} exact={true} />
        <Route path="/addprisoner" component={AddPrisoner} exact={true} />
        <Route path="/prisonerdetail" component={PrisonerDetail} exact={true} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);
export default Router;