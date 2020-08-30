import React, { Component } from "react";
import { connect } from "react-redux";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutline from "@material-ui/icons/MailOutline";
import LockOutlined from "@material-ui/icons/LockOutlined";
import CustomInput from "../components/CustomInput/CustomInput";
import Button from "../components/CustomButtons/Button";
import Danger from "../components/Typography/Danger";

import { login } from "../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { userPassword, userEmail } = this.props.state;
    if (userEmail && userPassword) {
      this.props.dispatch(login(userEmail, userPassword));
    }
  };

  render() {
    //const { userPassword, userEmail } = this.props.state;
    //console.log(userEmail, ":", userPassword);
    return (
      <section className="Form my-5 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img
                src="https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                className="img-fluid"
                alt="img"
              />
            </div>

            <div className="col-lg-7 px-5 pt-5">
              <h1 className="font-weight-bold py-3">LogIn</h1>
              <h4>Enter your's details </h4>
              <form>
                <div className="form-row">
                  <div className="col-lg-8">
                    <CustomInput
                      labelText="Email"
                      id="success"
                      success
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <MailOutline />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-lg-8">
                    <CustomInput
                      labelText="Password"
                      id="success"
                      success
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutlined />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>

                <div className="form-row">
                  {/* <p className="error">*invalid name/username</p> */}
                  <Danger>*invalid name/username</Danger>
                </div>
                <div className="form-row">
                  <div className="col-lg-8">
                    <Button
                      variant="contained"
                      color="info"
                      className="btn1 mt-3 mb-5"
                      onClick={this.handleFormSubmit}
                    >
                      Login
                    </Button>
                  </div>
                </div>

                <a href="#">
                  <Danger>Forgot password!</Danger>
                </a>
                <p>
                  Dont have an accoutn? <a href="#">Register here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps)(Login);
