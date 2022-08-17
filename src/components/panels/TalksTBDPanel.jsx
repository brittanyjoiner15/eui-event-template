import { EuiButton, EuiEmptyPrompt } from "@elastic/eui";
import React from "react";
import { rainbowCluster } from "../../data/ImageRefs";
import mixpanel from "mixpanel-browser";

function TalksTBDPanel() {
  const body = (
    <>
      <p>Schedule will be added soon.</p>
      <p>It's not too late to submit a talk!</p>
    </>
  );

  return (
    <>
      <EuiEmptyPrompt
        iconType={rainbowCluster}
        title={<h2>Coming soon</h2>}
        body={body}
        actions={
          <EuiButton
            color="success"
            fill
            href="https://forms.gle/yGAmKA8kTBJKwQSp6"
            target={"_blank"}
            onClick={() => {
              mixpanel.track(`Clicked submit talk`);
            }}
          >
            Submit a talk
          </EuiButton>
        }
      />
    </>
  );
}

export default TalksTBDPanel;
