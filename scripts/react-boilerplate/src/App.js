import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import logo from './logo.svg';



import Layout from './components/general/Layout'
import pages from './screens'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <pages.Dashboard />
        </Route>

      </Switch>
        
      </Layout>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
// export default withAuthenticator(App);
