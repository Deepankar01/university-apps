import React from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Error from './Layout/Error';
import College from './Pages/Manage/College';
import Courses from './Pages/Manage/Courses';
import Subjects from './Pages/Manage/Subjects';
import Semesters from './Pages/Manage/Semesters';
import SubmitFees from './Pages/Fees/Submit';
import ApproveRejectFees from './Pages/Fees/ApproveReject';
import ManageFees from './Pages/Fees/ManageFees';
import ManageUser from './Pages/UserManagement/ManageUser';
import ManageRolesPermissions from './Pages/UserManagement/ManageRolesPermissions';

const Routes = () => (
  <Error>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/colleges" component={College} />
      <Route path="/courses" component={Courses} />
      <Route path="/subjects" component={Subjects} />
      <Route path="/semesters" component={Semesters} />

      <Route exact path="/fees" component={ManageFees} />
      <Route path="/fees/submit" component={SubmitFees} />
      <Route path="/fees/approve" component={ApproveRejectFees} />

      <Route exact path="/user" component={ManageUser} />
      <Route path="/user/rolePermissions" component={ManageRolesPermissions} />
      <Route render={() => <Redirect to="/notFound" />} />
    </Switch>
  </Error>
);

export default withRouter(Routes);
