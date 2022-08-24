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

  columns = [
    {
      field: "sessionDetails",
      name: "Session",
      render: (sessionDetails) => (
        <EuiBadge
          color={sessionDetails.date === "Sept 8th" ? "primary" : "success"}
        >
          {sessionDetails.date}
        </EuiBadge>
      ),
    },
    {
      field: "sessionDetails",
      name: "Time",
      render: (sessionDetails) => (
        <>
          <EuiIcon type="clock" />
          {showTime(sessionDetails.timestamp, this.state.showEst)}
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
        <>
          <EuiAvatar
            imageUrl={speaker.avatar}
            size="s"
            name={speaker.name}
            className="xMargin"
          />
          <EuiText>{speaker.name}</EuiText>
        </>
      ),
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
            window.open(e.sessionDetails.calendarLink, "_blank");
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
