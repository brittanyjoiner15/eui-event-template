import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { addCalButtons } from "../../utilities/addCalButtons";
import { sessionOne, sessionTwo } from "../../data/consts";
import heroImage from "../../images/hero-image.webp"

export default class EventDetails extends React.Component {
  renderHero = () => {
    return (
      <EuiImage
        size="original"
        alt="Rainbow Stack Summit banner"
        src={heroImage}
      />
    );
  };

  renderMoreDetails = () => {
    return (
      <EuiEmptyPrompt
        title={
          <span>
            Identity theft is not a joke. Millions of famillies suffer every year. 
          </span>
        }
        body={
          <EuiText>
            Two sessions with different talks at each one, so join both if you
            can!
          </EuiText>
        }
        actions={[
          addCalButtons(sessionOne.dateAndTime, sessionOne.calendarLink),
          addCalButtons(sessionTwo.dateAndTime, sessionTwo.calendarLink),
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
