import React, { PureComponent, Fragment } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './style.css';

const LinkComponent = ({ name, url, links }) => (
  <Fragment>
    {url && <NavLink to={url}>{name}</NavLink>}
    {links && <div>{name}</div>}
  </Fragment>
);

LinkComponent.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  links: PropTypes.instanceOf(Array).isRequired,
};
class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(element, { url }) {
    const { history } = this.props;
    if (url) {
      element.preventDefault(false);
      history.push(url);
    }
  }

  render() {
    const { navLinkGroups } = this.props;
    return (
      <div className="ms-NavExample-LeftPane">
        <Nav
          className="navbar"
          groups={navLinkGroups}
          onRenderLink={LinkComponent}
          onLinkClick={this.onLinkClick}
          expandedStateText="expanded"
          collapsedStateText="collapsed"
        />
      </div>
    );
  }
}

NavBar.propTypes = {
  navLinkGroups: PropTypes.instanceOf(Array),
  history: PropTypes.instanceOf(Object).isRequired,
};
NavBar.defaultProps = {
  navLinkGroups: [
    {
      links: [
        {
          name: 'Dashboard',
          url: '/',
          icon: 'ViewDashboard',
          key: 'key0',
        },
        {
          name: 'Manage BBC',
          links: [
            {
              name: 'Colleges',
              url: '/colleges',
              icon: 'BankSolid',
              key: 'key1',
            },
            {
              name: 'Courses',
              url: '/courses',
              icon: 'ReadingMode',
              key: 'key2',
            },
            {
              name: 'Subjects',
              url: '/subjects',
              icon: 'Articles',
              key: 'key3',
            },
          ],
          isExpanded: false,
        },
        {
          name: 'Fees',
          links: [
            {
              name: 'Manage Fees',
              url: '/fees',
              icon: 'Money',
              key: 'key4',
            },
            {
              name: 'Approve and Reject',
              url: '/fees/approve',
              icon: 'FullWidthEdit',
              key: 'key5',
            },
          ],
          isExpanded: true,
        },
        {
          name: 'User Management',
          links: [
            {
              name: 'Roles and Permissions',
              url: '/user/rolePermissions',
              icon: 'SecurityGroup',
              key: 'key6',
            },
            {
              name: 'Users',
              url: '/user',
              icon: 'PeopleAdd',

              key: 'key7',
            },
          ],
          isExpanded: true,
        },
        {
          name: 'Submit Fees',
          url: '/fees/submit',
          icon: 'Money',
          key: 'key8',
        },
        {
          name: 'Print Fees Receipt',
          url: '/print',
          icon: 'Print',
          key: 'key9',
        },
      ],
    },
  ],
};
export default withRouter(NavBar);
