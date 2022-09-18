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
import { talks } from "../../data/talks";
import { renderGenreTags } from "../../utilities/genreTags";
import { showTime } from "../../utilities/showLocalTime";

export default class TalksPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEst: false,
    };
  }


  renderSpeakers = (speakers) => {
    if (speakers.length > 1) {
      return speakers.map((speaker) => (
        <>
          <EuiFlexGroup>
            <EuiFlexItem className="speaker-info">
              <EuiAvatar
                imageUrl={speaker.avatar}
                size="s"
                name={speaker.name}
                className="xMargin"
              />
                <EuiText>{speaker.name}</EuiText>
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
                imageUrl={speakers[0].avatar}
                size="s"
                name={speakers[0].name}
                className="xMargin"
              />
              <EuiText>{speakers[0].name}</EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </>
      );
    }
  };

  columns = [
    {
      field: "sessionDate",
      name: "Session",
      render: (sessionDate) => (
        <EuiBadge color={sessionDate === "Sept 8th" ? "primary" : "success"}>
          {sessionDate}
        </EuiBadge>
      ),
    },
    {
      field: "sessionTime",
      name: "Time",
      render: (sessionTime) => (
        <>
          <EuiIcon type="clock" />
          {showTime(sessionTime, this.state.showEst)}
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
      render: (speaker) => (
        <EuiFlexGroup direction="column">
          {this.renderSpeakers(speaker)}
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
    },
  ];

  renderShowEstButton() {
    return (
      <EuiPanel>
        <EuiButton
          minWidth={"300px"}
          iconType="clock"
          onClick={() => {
            if (!this.state.showEst) {
              this.setState({ showEst: true });
            } else {
              this.setState({ showEst: false });
            }
          }}
        >
          Show times in {this.state.showEst ? "Local" : "EDT"}
        </EuiButton>
      </EuiPanel>
    );
  }

  renderTalkTable() {
    return (
      <EuiFlexItem>
        <EuiBasicTable items={talks} columns={this.columns} hasActions />
      </EuiFlexItem>
    );
  }

  render() {
    return (
      <>
        <EuiFlexGroup
          gutterSize="l"
          alignItems="center"
          justifyContent="flexEnd"
        >
          <EuiFlexItem grow={false}>{this.renderShowEstButton()}</EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup className="xMargin">
          {this.renderTalkTable()}
        </EuiFlexGroup>
      </>
    );
  }
}
