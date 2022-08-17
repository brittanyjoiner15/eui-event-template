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
  renderAllSpeakers = () => {
    return (
      <>
        <EuiFlexGrid
          columns={3}
          direction="row"
          gutterSize="l"
          className="xMargin"
        >
          {speakers.map((speaker) => {
            return (
              <EuiFlexItem>
                <EuiCard
                  image={<EuiImage size="m" src={speaker.avatar}></EuiImage>}
                  aria-label={speaker.name}
                  title={speaker.name}
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
                  footer={speaker.shortBio}
                />
              </EuiFlexItem>
            );
          })}
        </EuiFlexGrid>
      </>
    );
  };

  render() {
    return <>{this.renderAllSpeakers()}</>;
  }
}
