import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText
} from "@elastic/eui";
import React from "react";
import AddCalButtons from "../../utilities/addCalButtons";
import { sessionOne, sessionTwo } from "../../data/consts";
import heroImage from "../../images/hero-image.webp";
export default class EventDetails extends React.Component {
  renderHero = (props) => {
    return (
      <EuiImage
        size="fullWidth"
        alt="Rainbow Stack Summit banner"
        src={heroImage}
      />
    );
  };

  renderMoreDetails = (props) => {
   const t = (this.props.t)

    return (
      <EuiEmptyPrompt
        title={
          <span>
            {t("Identity theft is not a joke. Millions of famillies suffer every year.")}
          </span>
        }
        body={
          <EuiText>
        {t("Two sessions with different talks at each one, so join both if you can!")}
          </EuiText>
        }
        
        actions={[
          <AddCalButtons 
          date={sessionOne.dateAndTime}
          calendarLink = {sessionOne.calendarLink}
          t={t}
          />,
          <AddCalButtons 
          date={sessionTwo.dateAndTime}
          calendarLink = {sessionTwo.calendarLink}
          t={t}
          />
        ]}
      />
    );
  };

  render() {
    return (
      <>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderHero()}</EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderMoreDetails()}</EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }
}
