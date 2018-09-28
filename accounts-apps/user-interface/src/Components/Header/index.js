import React from 'react';
import PropTypes from 'prop-types';
import { getMessage } from '../../utils';
import './style.css';

const Header = ({ appName }) => <div className="header">{appName}</div>;

Header.propTypes = {
  appName: PropTypes.string,
};

Header.defaultProps = {
  appName: getMessage('layout', 'appName'),
};
export default Header;
