import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../component/pages/Landing';
import Profile from '../component/pages/Profile';
import AllPrisoners from '../component/pages/AllPrisoners';
import AddPrisoner from '../component/pages/AddPrisoner';
import AddStaff from '../component/pages/AddStaff';
import Prisons from '../component/pages/Prisons';
import AddPrisons from '../component/pages/AddPrisons';
import RehabCenter from '../component/pages/RehabCenter';
import PrisonerDetail from '../component/pages/PrisonerDetail';
import Rehab_dashboard from '../component/pages/Rehab_dashboard';
import AllStaffs from '../component/pages/AllStaffs';
import Staff_dashboard from '../component/pages/Staff_dashboard';
import LogIn from '../component/pages/LogIn'
import SignUp from '../component/pages/SignUp'
// import NotFound from '../component/NotFound';
const NotFound = () => <h1>Oops not found..</h1>



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
        <Route path="/rehabcenters" component={RehabCenter} exact={true} />
        <Route path="/prisonerdetail" component={PrisonerDetail} exact={true} />
        <Route path="/allStaff" component={AllStaffs} exact={true} />
        <Route path="/login" component={LogIn} exact={true} />
        <Route path="/rehab_dashboard" component={Rehab_dashboard} exact={true} />
        <Route path="/staff_dashboard" component={Staff_dashboard} exact={true} />
        <Route path="/sign_up_admin_page" component={SignUp} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default Router;