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

function SpeakersPanel({t}) {
  const speakers = resource.speakers.read();
  console.log(speakers)
  return (
    <>
      <EuiFlexGrid
        columns={3}
        direction="row"
        gutterSize="l"
        className="xMargin"
      >
        {speakers?.map((speaker) => {
          return (
            <EuiFlexItem className="speaker-card">
              <EuiCard
                aria-label={speaker.name}
                image={<EuiImage size="m" src={speaker.imageLink}></EuiImage>}
                footer={t(speaker.shortBio)}
                description={
                  <>
                    <EuiText color="success">
                      <strong>{t(speaker.title)}</strong>
                    </EuiText>
                    <EuiBadge color="primary" iconType="branch">
                      {t(speaker.team)}
                    </EuiBadge>
                    <EuiBadge color="warning" iconType="globe">
                      {t(speaker.location)}
                    </EuiBadge>
                    <EuiBadge color="success" iconType="faceHappy">
                      {t(speaker.pronouns)}
                    </EuiBadge>
                  </>
                }
                title={t(speaker.name)}
              />
            </EuiFlexItem>
          );
        })}
      </EuiFlexGrid>
    </>
  );
}

export default SpeakersPanel;
