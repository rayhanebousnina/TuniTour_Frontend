import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AdminHome from './AdminHome';


const DashboardRoutes = () => {
  return(
    <div>
        <Router>
        <Dashboard />
        <Switch>
          <Route path='/admin/home' exact component={AdminHome} />
          {/* <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} /> */}
        </Switch>
      </Router>
    </div>
   )

 }

export default DashboardRoutes