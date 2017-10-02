import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {loginUser} from "../actions/user";

class Login extends Component {
  componentDidMount() {
    this.props.dispatch(loginUser());
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.user);
    // if (nextProps.user !== this.props.user) {
      // this.props.dispatch(loginUser());
    // }
  }
  render() {
    return <div>Login</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
