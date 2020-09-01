import React from "react";
import { connect } from "react-redux";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const startURL = "/ZealthAI-Assignment";

//---- create prrivate route
const PrivateRoute = (privateRoutProps) => {
  const { path, isLoggedin } = privateRoutProps;
  console.log("path:", path);
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
          <Redirect to={{ pathname: startURL }} />
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
            <Route exact path={startURL + "/"} component={Login} />
            <PrivateRoute path={startURL + "/google"} isLoggedin={isLoggedin} />
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
