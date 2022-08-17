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
const moment = require("moment-timezone");

export default class TalksPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEst: false,
      sortField: "Session",
      sortDirection: "asc",
    };
  }

  createSortingObject() {
    return {
      sort: {
        field: this.state.sortField,
        direction: this.state.sortDirection,
      },
    };
  }

  getLocalTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  showTime = (timestamp) => {
    let localTime = moment.tz(timestamp, this.getLocalTimezone());
    let estTime = moment.tz(timestamp, "America/New_York");

    return this.state.showEst
      ? estTime.format("h:mm a z")
      : localTime.format("h:mm a z");
  };

  renderGenreTags = (tagName) => {
    let color = "";
    switch (tagName) {
      case "How To":
        return (color = "primary");
      case "Elastic":
        return (color = "success");
      case "Self Care":
        return (color = "accent");
      case "LGBTQIA+":
        return (color = "warning");
      default:
        return (color = "default");
    }
  };

  columns = [
    {
      field: "sessionDetails",
      name: "Session",
      sortable: true,
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
      sortable: true,
      render: (sessionDetails) => (
        <>
          <EuiIcon type="clock" />
          {this.showTime(sessionDetails.timestamp)}
        </>
      ),
    },
    {
      field: "title",
      name: "Title",
      sortable: true,
    },
    {
      field: "description",
      name: "Description",
      sortable: true,
    },
    {
      field: "speaker",
      name: "Speaker",
      sortable: true,
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
      sortable: true,
      render: (genre) => (
        <EuiBadge color={this.renderGenreTags(genre)}>{genre}</EuiBadge>
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
          <EuiFlexItem>
            <EuiBasicTable
              items={talks}
              columns={this.columns}
              sorting={this.createSortingObject()}
              hasActions
              onChange={(e) => {
                this.setState({ sortField: e.sort.field });
                this.setState({ sortDirection: e.sort.direction });
              }}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }
}
