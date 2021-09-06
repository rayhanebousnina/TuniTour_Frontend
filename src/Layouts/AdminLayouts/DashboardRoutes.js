import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminHome from "./AdminHome";
import AdminAccount from "./AdminAccount";
import Category from "./Category";
import Cities from "./Cities";

const DashboardRoutes = () => {
  return (
    <div>
      <Router>
        <Dashboard />
        <Switch>
          <Route path="/admin/home" exact component={AdminHome} />
          <Route path="/admin/account" component={AdminAccount} />
          <Route path="/admin/categories" component={Category} />
          <Route path="/admin/cities" component={Cities} />
        </Switch>
      </Router>
    </div>
  );
};

export default DashboardRoutes;
