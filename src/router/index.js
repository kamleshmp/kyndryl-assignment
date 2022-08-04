import React from 'react';
import ManageProjectInfo from '../pages/ManageProjectInfo';
import UserList from '../pages/UserList';
import EditProjectInfo from '../pages/EditProjectInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';

class Index extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <UserList {...props} />}
            />
            <Route
              exact
              path="/users"
              component={(props) => <UserList {...props} />}
            />
            <Route
              exact
              path="/ProjectInfo"
              component={(props) => <ManageProjectInfo {...props} />}
            />
            <Route
              exact
              path="/ProjectInfo/:id"
              component={(props) => <EditProjectInfo {...props} />}
            />
          </Switch>
        </App>
      </Router>
    );
  }
}
export default Index;
