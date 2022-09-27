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
      sortedTalks: [...talks],
      sortOrder: '',
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
      sortable: true,
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

  sorting = {
    sort: {
       field: "sessionDate",
       direction: '0',
    },
    
  };

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
  date = (x) => {
    let d = '';
    for (let i=0; i< x.sessionDate.length - 2; i++){
        d += x.sessionDate[i];
    }
    //console.log(d);
    return d;
}


 sortByDateHandler = async() => {
    //if (this.state.sortedTalks.length === 0) return;
    const arr = this.state.sortedTalks;
    if (this.state.sortOrder==='' || this.state.sortOrder === 'dsc')    
      {for (let i=1; i<arr.length; i++){
          let key = arr[i];
          let keyDate = new Date(this.date(key));
          
          let j = i-1;
          let jDate = new Date(this.date(arr[j]));
          
          while (j>=0 && keyDate<jDate){
              arr[j+1] = arr[j];
              j=j-1;
              if (j===-1) break;
              jDate = new Date(this.date(arr[j]));
          }
          arr[j+1] = key;
      }
      this.setState(({sortOrder: 'asc', sortedTalks: arr}));
    }
    else if (this.state.sortOrder === 'asc'){
      for (let i=1; i<arr.length; i++){
        let key = arr[i];
        let keyDate = new Date(this.date(key));
        
        let j = i-1;
        let jDate = new Date(this.date(arr[j]));
        
        while (j>=0 && keyDate>jDate){
            arr[j+1] = arr[j];
            j=j-1;
            if (j===-1) break;
            jDate = new Date(this.date(arr[j]));
        }
        arr[j+1] = key;
    }
    this.setState(({sortOrder: 'dsc', sortedTalks: arr}));
    }
    
}

  renderTalkTable() {
    return (
      <EuiFlexItem>
        <EuiBasicTable items={this.state.sortedTalks} columns={this.columns} sorting={this.sorting} onChange={this.sortByDateHandler} hasActions />
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
