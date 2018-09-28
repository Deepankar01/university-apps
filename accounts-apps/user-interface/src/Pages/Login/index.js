import React, { PureComponent } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import PropTypes from 'prop-types';
import { getMessage } from '../../utils';
import './style.css';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    const { staticContent } = this.props;
    return (
      <Fabric>
        <div className="login">
          <div className="form">
            <form onSubmit={this.authenticate}>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="submit" />
              </div>
            </form>
          </div>
          <div className="pane">
            <h1>{staticContent.appName}</h1>
          </div>
        </div>
      </Fabric>
    );
  }
}

Login.propTypes = {
  staticContent: PropTypes.shape({
    staticContent: PropTypes.string,
  }),
};

Login.defaultProps = {
  staticContent: {
    appName: getMessage('layout', 'universityName'),
  },
};

export default Login;
