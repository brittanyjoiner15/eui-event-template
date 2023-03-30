import {
  EuiAvatar,
  EuiBadge,
  EuiBasicTable,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { useState } from "react";
import { renderGenreTags } from "../../utilities/genreTags";
import { showTime } from "../../utilities/showLocalTime";
import { fetchTalk } from "../../utilities/Api/fetchTalksDetails";

const resource = fetchTalk();

function TalksPanel({t}) {
  const [showEst, setShowEst] = useState(false);
  const talksData = resource.talks.read();
  const renderShowEstButton = () => {
    return (
      <EuiPanel>
        <EuiButton
          minWidth={"300px"}
          iconType="clock"
          onClick={() => {
            if (!showEst) {
              setShowEst(true);
            } else {
              setShowEst(false);
            }
          }}
        >
          {t("Show times in")} {showEst ? "Local" : "EDT"}
        </EuiButton>
      </EuiPanel>
    );
  };

  const columns = [
    {
      field: "date",
      name: t("Date"),
      render: (date) => (
        <EuiBadge color={date === "Sept 8th" ? "primary" : "success"}>
          {date.split("T")[0]}
        </EuiBadge>
      ),
    },
    {
      field: "time",
      name: t("Time"),
      render: (time) => (
        <>
          <EuiIcon type="clock" />
          {showTime(time, showEst)}
        </>
      ),
    },
    {
      field: "title",
      name:t( "Title"),
      render: (title, item) => (
        <span>
          
          {t(title)}
        </span>
      )
    },
    {
      field: "description",
      name: t("Description"),
      render: (description, item) => (
        <span>
          
          {t(description)}
        </span>
      )
    },
    {
      field: "speaker",
      name:t( "Speaker"),
      render: (speaker, speakersImageLink) => (
        <EuiFlexGroup direction="column">
          {renderSpeakers(speaker, speakersImageLink)}
        </EuiFlexGroup>
      ),
    },
    {
      field: "genre",
      name: t("Genre"),
      render: (genre) => (
        <EuiBadge color={renderGenreTags(genre)}>{t(genre)}</EuiBadge>
      ),
    },
    {
      name: t("Actions"),
      actions: [
        {
          name: "Add to cal",
          description: "Add session to your calendar",
          type: "icon",
          icon: "calendar",
          onClick: (e) => {
            window.open(
              `${e.sessionDate === "Sept 8th" ? "#" : "?"}`,
              "_blank"
            );
          },
        },
      ],
    },
  ];

  const renderTalkTable = () => {
    return (
      <EuiFlexItem>
        <EuiBasicTable items={talksData} columns={columns} hasActions />
      </EuiFlexItem>
    );
  };
  const renderSpeakers = (speakers, data) => {
    if (speakers.length > 1) {
      return speakers?.map((speakerName, index) => 
      (
        <>
          <EuiFlexGroup>
            <EuiFlexItem className="speaker-info">
              <EuiAvatar
                imageUrl={data.speakersImageLink[index]}
                size="s"
                name={speakerName}
                className="xMargin"
              />
              <EuiText>{t(speakerName)}</EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </>
      ));
    } else {
      return (
        <>
          <EuiFlexGroup>
            <EuiFlexItem className="speaker-info">
              <EuiAvatar
                imageUrl={data.speakersImageLink[0]}
                size="s"
                name={speakers[0]}
                className="xMargin"
              />
              <EuiText>{t(speakers[0].name)}</EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </>
      );
    }
  };

  return (
    <>
      <EuiFlexGroup gutterSize="l" alignItems="center" justifyContent="flexEnd">
        <EuiFlexItem grow={false}>{renderShowEstButton()}</EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup className="xMargin">{renderTalkTable()}</EuiFlexGroup>
    </>
  );
}

export default TalksPanel;
