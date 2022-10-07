import {
  EuiAvatar,
  EuiBadge,
  EuiBasicTable,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { useState, useEffect } from "react";
import { talks } from "../../data/talks";
import { renderGenreTags } from "../../utilities/genreTags";
import { showTime } from "../../utilities/showLocalTime";
import axios from 'axios'
import {webAppUrl as url} from '../../utilities/env' 

function TalksPanel() {
  
  const [talksData, setTalksData] = useState([])
  const [showEst, setShowEst] = useState(false)

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
          Show times in {showEst ? "Local" : "EDT"}
        </EuiButton>
      </EuiPanel>
    );
  }
  
  const columns = [
    {
      field: "date",
      name: "Date",
      render: (date) => (
        <EuiBadge color={date === "Sept 8th" ? "primary" : "success"}>
          {date.split('T')[0]}
        </EuiBadge>
      ),
    },
    {
      field: "time",
      name: "Time",
      render: (time) => (
        <>
          <EuiIcon type="clock" />
          {showTime(time, showEst)}
        </>
      ),
    },
    {
      field: "title",
      name: "Title",
    },
    {
      field: "description",
      name: "Description",
    },
    {
      field: "speaker",
      name: "Speaker",
      render: (speaker, speakersImageLink) => (
        <EuiFlexGroup direction="column">
          {renderSpeakers(speaker, speakersImageLink)}
        </EuiFlexGroup>
      )
    },
    {
      field: "genre",
      name: "Genre",
      render: (genre) => (
        <EuiBadge color={renderGenreTags(genre)}>{genre}</EuiBadge>
      ),
    },
    {
      name: "Actions",
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
    }
  ];
  
  useEffect(() => {
    const fetchTalksData = async () => {
      const res = await axios.get(`${url}?sheetName=Talks`)
      setTalksData(res.data.talks)
    }
    fetchTalksData()
  }, [])
  

  const renderTalkTable = () => {
    return (
      <EuiFlexItem>
        <EuiBasicTable items={talksData} columns={columns} hasActions />
      </EuiFlexItem>
    );
  }
  const renderSpeakers = (speakers, data) => {
    if (speakers.length > 1) {
      return speakers.map((speakerName, index) => (
        <>
          <EuiFlexGroup>
            <EuiFlexItem className="speaker-info">
              <EuiAvatar
                imageUrl={data.speakersImageLink[index]}
                size="s"
                name={speakerName}
                className="xMargin"
              />
                <EuiText>{speakerName}</EuiText>
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
              <EuiText>{speakers[0].name}</EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </>
      );
    }
  };

  return (
    <>
      <EuiFlexGroup
        gutterSize="l"
        alignItems="center"
        justifyContent="flexEnd"
      >
        <EuiFlexItem grow={false}>{renderShowEstButton()}</EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup className="xMargin">
        {renderTalkTable()}
      </EuiFlexGroup>
    </>
  )
}

export default TalksPanel
