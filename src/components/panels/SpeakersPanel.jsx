import {
  EuiBadge,
  EuiCard,
  EuiFlexGrid,
  EuiFlexItem,
  EuiImage,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { speakers } from "../../data/speakers";

export default class SpeakersPanel extends React.Component {
  renderAllSpeakers() {
    return (
      <>
        {speakers.map((speaker) => {
          return (
            <EuiFlexItem className="speaker-card">
              <EuiCard
                aria-label={speaker.name}
                image={<EuiImage size="m" src={speaker.avatar}></EuiImage>}
                footer={speaker.shortBio}
                description={
                  <>
                    <EuiText color="success">
                      <strong>{speaker.title}</strong>
                    </EuiText>
                    <EuiBadge color="primary" iconType="branch">
                      {speaker.team}
                    </EuiBadge>
                    <EuiBadge color="warning" iconType="globe">
                      {speaker.basedIn}
                    </EuiBadge>
                    <EuiBadge color="success" iconType="faceHappy">
                      {speaker.pronouns}
                    </EuiBadge>
                  </>
                }
                title={speaker.name}
              />
            </EuiFlexItem>
          );
        })}
      </>
    );
  }

  render() {
    return (
      <>
        <EuiFlexGrid
          columns={3}
          direction="row"
          gutterSize="l"
          className="xMargin"
        >
          {this.renderAllSpeakers()}
        </EuiFlexGrid>
      </>
    );
  }
}
