import { EuiButton, EuiFlexItem } from "@elastic/eui";
import React from "react";
import mixpanel from "mixpanel-browser";

export const addCalButtons = (date, calendarLink) => {
  return (
    <EuiFlexItem component="span">
      <EuiButton
        color="accent"
        fill
        iconType="calendar"
        href={calendarLink}
        target="_blank"
        onClick={() => {
          mixpanel.track("Clicked add to calendar");
        }}
      >
        Save the {date} session
      </EuiButton>
    </EuiFlexItem>
  );
};
