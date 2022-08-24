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
                <h4>Hosted by Elastic's Rainbow Stack ERG </h4>
              </EuiText>
              <EuiText>Group for LGBTQIA+ members and allies</EuiText>
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
