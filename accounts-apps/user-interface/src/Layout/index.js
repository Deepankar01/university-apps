import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from '@uifabric/icons';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Routes from '../routes';
import NotFound from '../Pages/NotFound';
import '../index.css';

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.renderApp = this.renderApp.bind(this);
    initializeIcons();
  }

  /* eslint-disable class-methods-use-this */
  renderApp() {
    return (
      <Fabric>
        <div className="app-layout">
          <NavBar />
          <Routes />
        </div>
        <Footer />
      </Fabric>
    );
  }
  /* eslint-enable */

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
