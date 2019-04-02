import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import FeesPredictiveWidget from '../../Components/FeesPredictiveWidget';

const DashBoardWidgetContainer = Styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 6rem;
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
      </DashBoardWidgetContainer>
    );
  }
}

export default Dashboard;
