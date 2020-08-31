import React from "react";
import { connect } from "react-redux";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//---- create prrivate route
const PrivateRoute = (privateRoutProps) => {
  const { path, isLoggedin } = privateRoutProps;

  return (
    <Route
      path={path}
      render={() => {
        return isLoggedin ? (
          <Route
            path={path}
            component={() => {
              window.location.href = "http://google.com";
              return null;
            }}
          />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
};

class App extends React.Component {
  render() {
    const { isLoggedin } = this.props;

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/google" isLoggedin={isLoggedin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

//---- access data from store
function mapStoreToProps(state) {
  return {
    isLoggedin: state.isLoggedin,
  };
}
//---- connecting store data to app components
export default connect(mapStoreToProps)(App);
