import { EuiButton, EuiFlexItem } from "@elastic/eui";
import React from "react";

const AddCalButtons = ({date, calendarLink,t}) => {
  return (
    <EuiFlexItem component="span">
    <EuiButton
      color="accent"
      fill
      iconType="calendar"
      href={calendarLink}
      target="_blank"
    >
     { t && t(`Save the ${date} session`)}
    </EuiButton>
  </EuiFlexItem>
  )
}

export default AddCalButtons
