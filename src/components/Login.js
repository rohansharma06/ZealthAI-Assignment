import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../actions/auth";
import image from "../assets/image/logo.png";

//---- @material-ui/core and /icon
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutline from "@material-ui/icons/MailOutline";
import LockOutlined from "@material-ui/icons/LockOutlined";
import People from "@material-ui/icons/PeopleAlt";
import Icon from "@material-ui/core/Icon";

//---- custom components by creative Tim
import CustomInput from "./CustomInput/CustomInput";
import Button from "./CustomButtons/Button";
import Danger from "./Typography/Danger";
import Info from "./Typography/Info";
import Primary from "./Typography/Primary";
import Warning from "./Typography/Warning";

const startURL = "/ZealthAI-Assignment";

class Login extends React.Component {
  constructor(props) {
    super(props);

    //---- state to check if both fiels is present or not
    this.state = {
      incompleteFilds: false,
    };
  }

  //---- function to handle login -dispatch action when both email and pass is present
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { userPassword, userEmail } = this.props.state;

    //---- if both felds bresent dispatch action else give invaid fields error
    if (userEmail && userPassword) {
      this.setState({
        incompleteFilds: false,
      });
      this.props.dispatch(login(userEmail, userPassword));
    } else {
      this.setState({
        incompleteFilds: true,
      });
    }
  };

  render() {
    //---- importing data from props and state
    const { isLoggedin, error, inProgress } = this.props.state;
    const { incompleteFilds } = this.state;

    //---- if user is login only then redirect to google
    if (isLoggedin) {
      return <Redirect to={startURL + "/google"} />;
    }
    return (
      <section className="Form my-5 mx-5">
        <div className="container pt-5">
          <div className="row no-gutters">
            <div className="col-lg-5 side-image">
              <img src={image} className="img-fluid" alt="logo-img" />
            </div>

            <div className="col-lg-7 px-5 pt-5">
              <Info>
                Log In
                <Icon className="login-icon">
                  <People />
                </Icon>
              </Info>

              <Primary my-5>Get started, enter details! </Primary>

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
                      id="error"
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

                {/* ---- handling errors while login */}
                {error && (
                  <div className="form-row">
                    <Danger>* Error 404: inValid Username/Password</Danger>
                  </div>
                )}
                {incompleteFilds && (
                  <div className="form-row">
                    <Danger>* inValid Fields </Danger>
                  </div>
                )}

                <div className="form-row">
                  <div className="col-lg-8">
                    {inProgress ? (
                      <Button
                        variant="contained"
                        color="danger"
                        className="btn1 mt-3 mb-5"
                        disabled
                        onClick={this.handleFormSubmit}
                      >
                        Log in
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="info"
                        className="btn1 mt-3 mb-5"
                        onClick={this.handleFormSubmit}
                      >
                        Log in
                      </Button>
                    )}
                  </div>
                </div>

                <a href="#">
                  <Danger>Forgot password! </Danger>
                </a>
                <Warning>
                  Dont have an account?
                  <a href="#"> Register here</a>
                </Warning>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//---- access data from store
function mapStateToProps(state) {
  return {
    state,
  };
}
//---- connecting store data to Login components
export default connect(mapStateToProps)(Login);
