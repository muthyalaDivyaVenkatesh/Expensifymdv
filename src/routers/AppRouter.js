import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, NavLink } from "react-router-dom";
import AddExpensePage from '../components/AddExpense';
import ExpenseDashboardPage from '../components/ExpenseDashbord';
import EditExpensePage from '../components/EditExpense';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute'
  

export const history = createHistory() 
  // Header
  const AppRoutes = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact />
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <PrivateRoute path="/help" component={HelpPage} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </div>
    </Router>
  );

 export default AppRoutes 
