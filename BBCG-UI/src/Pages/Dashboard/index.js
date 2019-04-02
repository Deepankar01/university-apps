import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';
import FeesPredictiveWidget from '../../Components/FeesPredictiveWidget';
import PageHeading from '../../Components/HOC/PageHeading';

const DashBoardWidgetContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    >*{
        margin: 10px;
        height: 40%;
    }
`;

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <DashBoardWidgetContainer>
          <FeesPredictiveWidget />
          <FeesPredictiveWidget />
          <FeesPredictiveWidget />
          <FeesPredictiveWidget />
          <FeesPredictiveWidget />
          <FeesPredictiveWidget />
        </DashBoardWidgetContainer>
      </Fragment>
    );
  }
}

export default PageHeading(Dashboard, 'Dashboard');
