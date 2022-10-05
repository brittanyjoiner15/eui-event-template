import {
  EuiButton,
  EuiBottomBar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiLink,
} from "@elastic/eui";
import { getColorTheme } from "../utilities/colors";
import React from "react";

export default class Bottombar extends React.Component {
  render() {
    return (
      <>
        <EuiBottomBar position="static" style={{ backgroundColor: `${getColorTheme("bb_bgColor", this.props.theme)}`,}}>
          <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
            <EuiFlexItem grow={false} >
              <EuiText color={getColorTheme("text", this.props.theme)}>
                <h4>
                  Hosted by Dunder Mifflin and Parks and Recreation Department
                </h4>
              </EuiText>
              <EuiText color={getColorTheme("text", this.props.theme)}>
                Group for all paper enthusiasts and bureaucrats
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFlexGroup
                direction="row"
                alignItems="center"
                justifyContent="center"
                responsive={false}
              >
                <EuiFlexItem grow={false}>
                  <EuiLink href="#" target="_blank" className="social-links">
                    <EuiText color="#f9744e">
                      <i className="social-icons fa-brands fa-facebook"></i>
                    </EuiText>
                  </EuiLink>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiLink href="#" target="_blank" className="social-links">
                    <EuiText color="#7dd656">
                      <i className="social-icons fa-brands fa-twitter"></i>
                    </EuiText>
                  </EuiLink>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiLink href="#" target="_blank" className="social-links">
                    <EuiText color="#ffde59">
                      <i className="social-icons fa-brands fa-linkedin"></i>
                    </EuiText>
                  </EuiLink>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiLink href="#" target="_blank" className="social-links">
                    <EuiText color="#c96ae3">
                      <i className="social-icons fa-brands fa-instagram"></i>
                    </EuiText>
                  </EuiLink>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFlexGroup>
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
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiBottomBar>
      </>
    );
  }
}
