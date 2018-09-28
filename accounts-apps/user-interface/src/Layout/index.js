import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Routes from '../routes';
import NotFound from '../Pages/NotFound';

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.renderApp = this.renderApp.bind(this);
  }

  renderApp() {
    return (
      <Fragment>
        <Header />
        <Routes />
        <Footer />
      </Fragment>
    );
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/notFound" exact component={NotFound} />
            <Route path="/" component={this.renderApp} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

Layout.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
