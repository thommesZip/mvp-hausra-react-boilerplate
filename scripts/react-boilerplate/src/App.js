import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

import logo from './logo.svg';
import './css/tailwind.output.css'


import Layout from './components/general/Layout'
import pages from './pages'

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <pages.Dashboard />
        </Route>

      </Switch>
        
      </Layout>
    </Router>
  );
}

export default App;
