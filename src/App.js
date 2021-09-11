import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Layouts/ClientLayouts";
import City from "./Layouts/ClientLayouts/City";
import Service from "./Layouts/ClientLayouts/Service";
import DashboardRoutes from "./Layouts/AdminLayouts/DashboardRoutes";
import RegisterPage from "./Layouts/ClientLayouts/RegisterPage";
import LoginPage from "./Layouts/ClientLayouts/LoginPage";
import UserPrivateRoute from "./PrivateRoutes/UserPrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/city/:id" component={City} />
        <Route path="/service/:id" component={Service} />
        <Route path="/user" component={RegisterPage} />

        <Switch>
          <UserPrivateRoute path="/admin" component={DashboardRoutes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
