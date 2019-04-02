import React, { Component, Fragment } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';

const PageHeading = (ComponentToAddHeading, heading) => class PageHeadingHOC extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Text
          variant="xLarge"
          nowrap
          style={{ fontWeight: 800, marginLeft: '10px' }}
        >
          {heading}
        </Text>
        <ComponentToAddHeading {...this.props} />
      </Fragment>
    );
  }
};

export default PageHeading;
