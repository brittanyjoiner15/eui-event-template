import { EuiButton, EuiFlexItem } from "@elastic/eui";
import React from "react";

export const addCalButtons = (date, calendarLink) => {
  return (
    <EuiFlexItem component="span">
      <EuiButton
        color="accent"
        fill
        iconType="calendar"
        href={calendarLink}
        target="_blank"
      >
        Save the {date} session
      </EuiButton>
    </EuiFlexItem>
  );
};
