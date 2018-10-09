import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './style.css';

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();
    const { history } = this.props;
    // eslint-disable-next-line no-console
    console.log(e.key);
    history.push('/college');
    return false;
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
                  onClick: this.onClickHandler,
                  key: 'key0',
                },
                {
                  name: 'Manage BBC',
                  links: [
                    {
                      name: 'Colleges',
                      url: '/college',
                      icon: 'BankSolid',
                      key: 'key1',
                      onClick: this.onClickHandler,
                    },
                    {
                      name: 'Courses',
                      url: '/college/course',
                      icon: 'ReadingMode',
                      key: 'key2',
                      onClick: this.onClickHandler,
                    },
                    {
                      name: 'Subjects',
                      url: '/college/course/subject',
                      icon: 'Articles',
                      key: 'key3',
                      onClick: this.onClickHandler,
                    },
                  ],
                  isExpanded: false,
                },
                {
                  name: 'Fees',
                  links: [
                    {
                      name: 'Submit Fees',
                      url: '/fees/new',
                      icon: 'Money',
                      key: 'key4',
                      onClick: this.onClickHandler,
                    },
                    {
                      name: 'Edit Fees',
                      url: '/fees/edit',
                      icon: 'FullWidthEdit',
                      key: 'key5',
                      onClick: this.onClickHandler,
                    },
                    {
                      name: 'List',
                      url: '/fees',
                      key: 'key6',
                      onClick: this.onClickHandler,
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
                      onClick: this.onClickHandler,
                      key: 'key8',
                    },
                    {
                      name: 'Add new user',
                      url: '/add/user',
                      icon: 'PeopleAdd',
                      onClick: this.onClickHandler,
                      key: 'key9',
                    },
                    {
                      name: 'Remove user',
                      url: '/add/user',
                      icon: 'PeopleBlock',
                      onClick: this.onClickHandler,
                      key: 'key10',
                    },
                  ],
                  isExpanded: false,
                },
                {
                  name: 'Print Fees Receipt',
                  url: '/print',
                  icon: 'Print',
                  onClick: this.onClickHandler,
                  key: 'key11',
                },
              ],
            },
          ]}
          // onRenderLink={onRenderLink}
          expandedStateText="expanded"
          collapsedStateText="collapsed"
          initialSelectedKey="key0"
          // selectedKey="key3"
        />
      </div>
    );
  }
}

NavBar.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(NavBar);
