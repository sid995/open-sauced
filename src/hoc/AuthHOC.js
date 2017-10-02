import React from "react";
import {connect} from "react-redux";
import LoginAuth from "../components/LoginAuth";

export default function requireAuthentication(Component) {
  class AuthHOC extends Component {
    render() {
      const {user} = this.props;
      return user ? <Component {...this.props} /> : <LoginAuth />;
    }
  }

  return connect((state) => state)(AuthHOC);
}
