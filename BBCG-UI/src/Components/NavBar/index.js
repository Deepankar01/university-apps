import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './style.css';

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <div className="ms-NavExample-LeftPane">
        <Nav
          className="navbar"
          groups={[
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
                  isExpanded: true,
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
                      url: '/add/role',
                      icon: 'SecurityGroup',
                      key: 'key6',
                    },
                    {
                      name: 'Users',
                      url: '/add/user',
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
          ]}
          expandedStateText="expanded"
          collapsedStateText="collapsed"
        />
      </div>
    );
  }
}

export default withRouter(NavBar);
