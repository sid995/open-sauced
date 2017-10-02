import React, {Component} from "react";
import Login from "./components/Login";
import NewRepo from "./components/NewRepo";
import Repositories from "./components/Repositories";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {home, github, plus} from "./icons";
import netlifyIdentity from "netlify-identity-widget";
import {connect} from "react-redux";

class App extends Component {
  handleLogIn = () => {
    netlifyIdentity.open();
  }

  handleLogOut = () => {
    netlifyIdentity.logout();
  }

  render() {
    return (
      <Router>
        <div>{this.props.user ?
          <header>
            <Link to="/" className="home" alt="home"><span><img src={home} /></span></Link>
            <a onClick={this.handleLogOut}>Logout</a>
            <a className="nav-link" href="https://github.com/bdougie/open-sauced"><span><img src={github} /></span></a>
            <Dropdown />
            <Link to="/new" className="nav-link" alt="Add A Repo"><img src={plus} /></Link>
          </header> : <header><a onClick={this.handleLogIn}>Login</a></header>}
          <section>
            <Route exact path="/" component={Login}/>
            <Route path="/repos" component={Repositories}/>
            <Route path="/new" component={NewRepo}/>
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);

