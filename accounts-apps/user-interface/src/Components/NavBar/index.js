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
                  name: 'Home',
                  links: [
                    {
                      name: 'Activity',
                      url: 'http://msn.com',
                      key: 'key1',
                    },
                    {
                      name: 'News',
                      url: 'http://msn.com',
                      key: 'key2',
                    },
                  ],
                  isExpanded: true,
                },
                {
                  name: 'Documents',
                  url: 'http://example.com',
                  key: 'key3',
                  isExpanded: true,
                },
                { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                {
                  name: 'Long Name Test for ellipse',
                  url: 'http://msn.com',
                  key: 'key6',
                },
                {
                  name: 'Edit',
                  url: 'http://cnn.com',
                  onClick: this.onClickHandler2,
                  icon: 'Edit',
                  key: 'key8',
                },
                {
                  name: 'Delete',
                  url: 'http://cnn.com',
                  onClick: this.onClickHandler2,
                  iconProps: { iconName: 'Delete' },
                  key: 'key9',
                },
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
