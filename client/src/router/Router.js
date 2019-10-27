import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../component/pages/Landing';
import Profile from '../component/pages/Profile';
import AllPrisoners from '../component/pages/AllPrisoners';
import AddPrisoner from '../component/pages/AddPrisoner';
import AddStaff from '../component/pages/AddStaff';
import Prisons from '../component/pages/Prisons';
import AddPrisons from '../component/pages/AddPrisons';
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
        <Route path="/addStaff" component={AddStaff} exact={true} />
        <Route path="/addPrisons" component={AddPrisons} exact={true} />
        <Route path="/prisons" component={Prisons} exact={true} />
        <Route path="/prisonerdetail" component={PrisonerDetail} exact={true} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);
export default Router;