import React, { PureComponent } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
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
    const { appName, loginScreenLabels } = staticContent;
    return (
      <Fabric>
        <div className="login">
          <div className="form">
            <form onSubmit={this.authenticate}>
              <div>
                <TextField
                  label={loginScreenLabels.username}
                  type="text"
                  required
                />
              </div>
              <div>
                <TextField
                  label={loginScreenLabels.password}
                  type="text"
                  required
                />
              </div>
              <div>
                <DefaultButton text={loginScreenLabels.loginText} />
              </div>
            </form>
          </div>
          <div className="pane">
            <h1>{appName}</h1>
          </div>
        </div>
      </Fabric>
    );
  }
}

Login.propTypes = {
  staticContent: PropTypes.shape({
    appName: PropTypes.string,
    loginScreenLabels: PropTypes.instanceOf(Object),
  }),
};

Login.defaultProps = {
  staticContent: {
    appName: getMessage('layout', 'universityName'),
    loginScreenLabels: getMessage('login'),
  },
};

export default Login;
