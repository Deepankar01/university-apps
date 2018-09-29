import React, { PureComponent } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './style.css';

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickHandler2 = this.onClickHandler2.bind(this);
  }

  /* eslint-disable class-methods-use-this,no-unused-vars */
  onClickHandler(e) {
    alert('test');
    return false;
  }

  onClickHandler2(e) {
    return false;
  }
  /* eslint-enable */

  render() {
    return (
      <div className="ms-NavExample-LeftPane">
        <Nav
          className="navbar"
          groups={[
            {
              links: [
                {
                  name: 'Manage BBC',
                  links: [
                    {
                      name: 'Colleges',
                      url: '/college',
                      icon: 'BankSolid',
                      key: 'key1',
                      onClick: this.onClickHandler2,
                    },
                    {
                      name: 'Courses',
                      url: '/college/course',
                      icon: 'ReadingMode',
                      key: 'key2',
                      onClick: this.onClickHandler2,
                    },
                    {
                      name: 'Subjects',
                      url: '/college/course/subject',
                      icon: 'Articles',
                      key: 'key3',
                      onClick: this.onClickHandler2,
                    },
                  ],
                  isExpanded: false,
                },
                {
                  name: 'Fees',
                  links: [
                    {
                      name: 'Submit Fees',
                      url: 'http://msn.com',
                      icon: 'Money',
                      key: 'key4',
                      onClick: this.onClickHandler2,
                    },
                    {
                      name: 'Edit Fees',
                      url: 'http://msn.com',
                      icon: 'FullWidthEdit',
                      key: 'key5',
                      onClick: this.onClickHandler2,
                    },
                    {
                      name: 'List',
                      url: 'http://msn.com',
                      key: 'key6',
                      onClick: this.onClickHandler2,
                      icon: 'BulletedList',
                    },
                  ],
                  isExpanded: true,
                },
                {
                  name: 'Actions',
                  links: [
                    {
                      name: 'Print Reports',
                      url: '/reports',
                      icon: 'Print',
                      key: 'key7',
                    },
                    {
                      name: 'Add new role',
                      url: '/add/role',
                      icon: 'SecurityGroup',
                      onClick: this.onClickHandler2,
                      key: 'key8',
                    },
                    {
                      name: 'Add new user',
                      url: '/add/user',
                      icon: 'PeopleAdd',
                      onClick: this.onClickHandler2,
                      key: 'key9',
                    },
                    {
                      name: 'Remove user',
                      url: '/add/user',
                      icon: 'PeopleBlock',
                      onClick: this.onClickHandler2,
                      key: 'key10',
                    },
                  ],
                  isExpanded: true,
                },
                {
                  name: 'Print Fees Receipt',
                  url: '/print',
                  icon: 'Print',
                  onClick: this.onClickHandler,
                  key: 'key11',
                },
                // {
                //   name: 'Pri',
                //   url: 'http://cnn.com',
                //   onClick: this.onClickHandler2,
                //   icon: 'Edit',
                //   key: 'key8',
                // },
                // {
                //   name: 'Delete',
                //   url: 'http://cnn.com',
                //   onClick: this.onClickHandler2,
                //   iconProps: { iconName: 'Delete' },
                //   key: 'key9',
                // },
              ],
            },
          ]}
          expandedStateText="expanded"
          collapsedStateText="collapsed"
          selectedKey="key3"
        />
      </div>
    );
  }
}

export default NavBar;
