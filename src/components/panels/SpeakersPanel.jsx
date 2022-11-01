import {
  EuiBadge,
  EuiCard,
  EuiFlexGrid,
  EuiFlexItem,
  EuiImage,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { fetchSpeaker } from "../../utilities/Api/fetchSpeakerDetails";

// speaker data lives in this spreadsheet: https://docs.google.com/spreadsheets/d/1XgyHXaReTZ3Nq_r7QS18GDvqK_ht010QqnI6PXAnePA/edit#gid=0

const resource = fetchSpeaker();

function SpeakersPanel() {
  const speakers = resource.speakers.read();

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
            <EuiFlexItem className="speaker-card">
              <EuiCard
                aria-label={speaker.name}
                image={<EuiImage size="m" src={speaker.imageLink}></EuiImage>}
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
                      {speaker.location}
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
      </EuiFlexGrid>
    </>
  );
}

export default SpeakersPanel;
