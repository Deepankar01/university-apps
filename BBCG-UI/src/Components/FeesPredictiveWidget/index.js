import React, { Component } from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardLogo,
  DocumentCardStatus,
} from 'office-ui-fabric-react/lib/DocumentCard';

class FeesPredictiveWidget extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    const logoProps = {
      logoIcon: 'OutlookLogo',
    };

    return (
      <DocumentCard onClickHref="http://bing.com">
        <DocumentCardLogo {...logoProps} />
        <div className="ms-ConversationTile-TitlePreviewArea">
          <DocumentCardTitle
            title="Conversation about annual report a very long long name, Title should be truncated on the long name."
            shouldTruncate
          />
          <DocumentCardTitle
            title="This is the email content preview, please feel free to give feedback.
                SharePoint Site Activity add conversation card! This is the last."
            shouldTruncate
            showAsSecondaryTitle
          />
          <DocumentCardStatus statusIcon="attach" status=" 3 Attachments" />
        </div>
        <DocumentCardActivity activity="Sent March 13, 2018" people={[]} />
      </DocumentCard>
    );
  }
}

export default FeesPredictiveWidget;
