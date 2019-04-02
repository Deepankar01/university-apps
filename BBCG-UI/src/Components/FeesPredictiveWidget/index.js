// import React, { Component } from 'react';
// import {
//   DocumentCard,
//   DocumentCardActions,
//   DocumentCardActivity,
//   DocumentCardDetails,
//   DocumentCardImage,
//   DocumentCardLocation,
//   DocumentCardPreview,
//   DocumentCardTitle,
//   DocumentCardLogo,
//   DocumentCardStatus,
// } from 'office-ui-fabric-react/lib/DocumentCard';
// import { ImageFit } from 'office-ui-fabric-react/lib/Image';

// class FeesPredictiveWidget extends Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//     this.state = {};
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     console.log('You clicked the card.');
//   }

//   render() {
//     const previewProps = {
//       getOverflowDocumentCountText: overflowCount => `+${overflowCount} more`,
//       previewImages: [
//         {
//           name: '2016 Conference Presentation',
//           linkProps: {
//             href: 'http://bing.com',
//           },
//           previewImageSrc: TestImages.documentPreview,
//           iconSrc: TestImages.iconPpt,
//           imageFit: ImageFit.cover,
//           width: 318,
//           height: 196,
//         },
//         {
//           name: 'New Contoso Collaboration for Conference Presentation Draft',
//           linkProps: {
//             href: 'http://bing.com',
//           },
//           previewImageSrc: TestImages.documentPreviewTwo,
//           iconSrc: TestImages.iconPpt,
//           imageFit: ImageFit.cover,
//           width: 318,
//           height: 196,
//         },
//         {
//           name: 'Spec Sheet for design',
//           linkProps: {
//             href: 'http://bing.com',
//           },
//           previewImageSrc: TestImages.documentPreviewThree,
//           iconSrc: TestImages.iconPpt,
//           imageFit: ImageFit.cover,
//           width: 318,
//           height: 196,
//         },
//         {
//           name: 'Contoso Marketing Presentation',
//           linkProps: {
//             href: 'http://bing.com',
//           },
//           previewImageSrc: TestImages.documentPreview,
//           iconSrc: TestImages.iconPpt,
//           imageFit: ImageFit.cover,
//           width: 318,
//           height: 196,
//         },
//         {
//           name: 'Notes from Ignite conference',
//           linkProps: {
//             href: 'http://bing.com',
//           },
//           previewImageSrc: TestImages.documentPreviewTwo,
//           iconSrc: TestImages.iconPpt,
//           imageFit: ImageFit.cover,
//           width: 318,
//           height: 196,
//         },
//         {
//           name: 'FY17 Cost Projections',
//           linkProps: {
//             href: 'http://bing.com',
//           },
//           previewImageSrc: TestImages.documentPreviewThree,
//           iconSrc: TestImages.iconPpt,
//           imageFit: ImageFit.cover,
//           width: 318,
//           height: 196,
//         },
//       ],
//     };

//     const previewPropsUsingIcon = {
//       previewImages: [
//         {
//           previewIconProps: {
//             iconName: 'OpenFile',
//             styles: { root: { fontSize: 42, color: '#ffffff' } },
//           },
//           width: 318,
//           height: 196,
//         },
//       ],
//     };

//     const logoProps = {
//       logoIcon: 'OutlookLogo',
//     };

//     return (
//       <div>
//         <DocumentCard onClick={this.onClick}>
//           <DocumentCardPreview {...previewProps} />
//           <DocumentCardLocation
//             location="Marketing Documents"
//             locationHref="http://microsoft.com"
//             ariaLabel="Location, Marketing Documents"
//           />
//           <DocumentCardTitle title="6 files were uploaded" />
//           <DocumentCardActivity
//             activity="Created Feb 23, 2016"
//             people={[
//               {
//                 name: 'Annie Lindqvist',
//                 profileImageSrc: TestImages.personaFemale,
//               },
//               { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
//               {
//                 name: 'Greta Lundberg',
//                 profileImageSrc: TestImages.personaFemale,
//               },
//             ]}
//           />
//           <DocumentCardActions
//             actions={[
//               {
//                 iconProps: { iconName: 'Share' },
//                 onClick: (ev) => {
//                   console.log('You clicked the share action.');
//                   ev.preventDefault();
//                   ev.stopPropagation();
//                 },
//                 ariaLabel: 'share action',
//               },
//               {
//                 iconProps: { iconName: 'Pin' },
//                 onClick: (ev) => {
//                   console.log('You clicked the pin action.');
//                   ev.preventDefault();
//                   ev.stopPropagation();
//                 },
//                 ariaLabel: 'pin action',
//               },
//               {
//                 iconProps: { iconName: 'Ringer' },
//                 onClick: (ev) => {
//                   console.log('You clicked the ringer action.');
//                   ev.preventDefault();
//                   ev.stopPropagation();
//                 },
//                 ariaLabel: 'ringer action',
//               },
//             ]}
//             views={432}
//           />
//         </DocumentCard>
//         <p />
//         Card Logo, Text Preview CardStatus are used on below examples.
//         <p />
//         <DocumentCard onClickHref="http://bing.com">
//           <DocumentCardLogo {...logoProps} />
//           <div className="ms-ConversationTile-TitlePreviewArea">
//             <DocumentCardTitle
//               title="Conversation about annual report a very long long name, Title should be truncated on the long name."
//               shouldTruncate
//             />
//             <DocumentCardTitle
//               title="This is the email content preview, please feel free to give feedback.
//                 SharePoint Site Activity add conversation card! This is the last."
//               shouldTruncate
//               showAsSecondaryTitle
//             />
//             <DocumentCardStatus statusIcon="attach" status=" 3 Attachments" />
//           </div>
//           <DocumentCardActivity
//             activity="Sent March 13, 2018"
//             people={[
//               {
//                 name: 'Annie Lindqvist',
//                 profileImageSrc: TestImages.personaFemale,
//               },
//               { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
//               {
//                 name: 'Greta Lundberg',
//                 profileImageSrc: TestImages.personaFemale,
//               },
//             ]}
//           />
//         </DocumentCard>
//         <p />
//         <DocumentCard onClickHref="http://bing.com">
//           <DocumentCardLogo {...logoProps} />
//           <div className="ms-ConversationTile-TitlePreviewArea">
//             <DocumentCardTitle title="Conversation about annual Report" />
//             <DocumentCardTitle
//               title="This is the email content preview, help."
//               showAsSecondaryTitle
//             />
//             <DocumentCardStatus statusIcon="attach" status=" 3 Attachments" />
//           </div>
//           <DocumentCardActivity
//             activity="Sent March 13, 2018"
//             people={[
//               {
//                 name: 'Annie Lindqvist',
//                 profileImageSrc: TestImages.personaFemale,
//               },
//               { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
//               {
//                 name: 'Greta Lundberg',
//                 profileImageSrc: TestImages.personaFemale,
//               },
//             ]}
//           />
//         </DocumentCard>
//         <p />
//         <DocumentCard onClickHref="http://bing.com">
//           <DocumentCardLogo {...logoProps} />
//           <div className="ms-ConversationTile-TitlePreviewArea">
//             <DocumentCardTitle
//               title="Conversation about annual report"
//               shouldTruncate
//             />
//             <DocumentCardTitle
//               title="This is the email content preview, please feel free to give!"
//               shouldTruncate
//               showAsSecondaryTitle
//             />
//           </div>
//           <DocumentCardActivity
//             activity="Sent March 13, 2018"
//             people={[
//               {
//                 name: 'Annie Lindqvist',
//                 profileImageSrc: TestImages.personaFemale,
//               },
//               { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
//               {
//                 name: 'Greta Lundberg',
//                 profileImageSrc: TestImages.personaFemale,
//               },
//             ]}
//           />
//         </DocumentCard>
//         <p />
//         <DocumentCard onClickHref="http://bing.com">
//           <DocumentCardPreview {...previewPropsUsingIcon} />
//           <DocumentCardDetails>
//             <DocumentCardTitle title="View and share files" shouldTruncate />
//             <DocumentCardActivity
//               activity="Created a few minutes ago"
//               people={[
//                 {
//                   name: 'Kat Larrson',
//                   profileImageSrc: TestImages.personaFemale,
//                 },
//               ]}
//             />
//           </DocumentCardDetails>
//         </DocumentCard>
//         <p />
//         <DocumentCard onClickHref="http://bing.com">
//           <DocumentCardImage
//             height={100}
//             imageFit={ImageFit.cover}
//             iconProps={{
//               iconName: 'OneNoteLogo',
//               styles: { root: { color: '#813a7c' } },
//             }}
//             imageSrc={TestImages.documentPreviewTwo}
//           />
//           <DocumentCardDetails>
//             <DocumentCardTitle title="How to make good design" shouldTruncate />
//           </DocumentCardDetails>
//           <DocumentCardActivity
//             activity="Modified March 13, 2018"
//             people={[
//               {
//                 name: 'Annie Lindqvist',
//                 profileImageSrc: TestImages.personaFemale,
//               },
//               { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
//             ]}
//           />
//         </DocumentCard>
//         <p />
//         <DocumentCard onClickHref="http://bing.com">
//           <DocumentCardImage
//             height={150}
//             imageFit={ImageFit.cover}
//             iconProps={{
//               iconName: 'OneNoteLogo',
//               styles: {
//                 root: {
//                   color: '#813a7c',
//                   fontSize: '120px',
//                   width: '120px',
//                   height: '120px',
//                 },
//               },
//             }}
//           />
//           <DocumentCardDetails>
//             <DocumentCardTitle
//               title="How to make good design without an image"
//               shouldTruncate
//             />
//           </DocumentCardDetails>
//           <DocumentCardActivity
//             activity="Modified January 1, 2019"
//             people={[
//               { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
//             ]}
//           />
//         </DocumentCard>
//       </div>
//     );
//   }
// }

// export default FeesPredictiveWidget;