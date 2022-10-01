import {
    EuiCard,
    EuiFlexGrid,
    EuiFlexItem,
} from "@elastic/eui";
import React from "react";
import { recordings } from "../../data/recordings";

export default class RecordingsPanel extends React.Component {
  renderAllRecordings() {
    return (
      <>
        {recordings.map((recording) => {
          return (
            <EuiFlexItem>
              <EuiCard>
              {recording.embedId}
              </EuiCard>
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
          columns={2}
          direction="row"
          gutterSize="l"
          className="xMargin"
        >
          {this.renderAllRecordings()}
        </EuiFlexGrid>
      </>
    );
  }
}
