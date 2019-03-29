import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { getMessage } from '../../utils';

const Footer = ({ universityName }) => (
  <div className="footer">{universityName}</div>
);

Footer.propTypes = {
  universityName: PropTypes.string,
};
Footer.defaultProps = {
  universityName: getMessage('layout', 'universityName'),
};
export default Footer;
