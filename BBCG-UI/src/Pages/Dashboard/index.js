import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import FeesPredictiveWidget from '../../Components/FeesPredictiveWidget';

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
      <DashBoardWidgetContainer>
        <FeesPredictiveWidget />
        <FeesPredictiveWidget />
        <FeesPredictiveWidget />
        <FeesPredictiveWidget />
        <FeesPredictiveWidget />
        <FeesPredictiveWidget />
      </DashBoardWidgetContainer>
    );
  }
}

export default Dashboard;
