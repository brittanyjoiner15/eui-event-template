import {
  EuiButton,
  EuiBottomBar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
} from "@elastic/eui";
import React from "react";

export default class Bottombar extends React.Component {
  render() {
    return (
      <>
        <EuiBottomBar position="static">
          <EuiFlexGroup direction="row" alignItems="center">
            <EuiFlexItem>
              <EuiText>
                <h4>Hosted by Dunder Mifflin and Parks and Recreation Department ! </h4>
              </EuiText>
              <EuiText>Group for all paper enthusiasts and bureaucrats </EuiText>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiButton color="success" fill href="#" target={"_blank"}>
                Sign up for updates
              </EuiButton>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiButton color="primary" fill href="#" target={"_blank"}>
                Join the slack group
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiBottomBar>
      </>
    );
  }
}
