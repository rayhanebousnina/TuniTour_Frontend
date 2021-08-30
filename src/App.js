import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Layouts/ClientLayouts';
import City from './Layouts/ClientLayouts/City';
import DashboardRoutes from './Layouts/AdminLayouts/DashboardRoutes'

function App() {
  return (
    <div>
       <Router>
        <Route path="/home" component={Home} />
        <Route path="/city" component={City} />
        <Route path="/admin" component={DashboardRoutes}/>
      </Router>
    </div>
  );
}

export default App;
