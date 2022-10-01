import {
  EuiBadge,
  EuiCard,
  EuiFlexGrid,
  EuiFlexItem,
  EuiImage,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { useEffect } from "react";
// import { speakers } from "../../data/speakers";
import axios from 'axios'
import { useState } from "react";
import {webAppUrl as url} from '../../utilities/env' 

function SpeakersPanel() {

  const [speakers, setSpeakers] = useState([])

  useEffect(() => {
    const fetchSpeakersDetails = async () => {
      const res = await axios.get(`${url}?sheetName=Speakers`)
      console.log(res.data)
      setSpeakers(res.data.speakers)
    }

    fetchSpeakersDetails()
  }, [])

  return (
      <>
        <EuiFlexGrid
          columns={3}
          direction="row"
          gutterSize="l"
          className="xMargin"
        >
          {speakers.map((speaker) => {
            return (
              <EuiFlexItem>
                <EuiCard
                  aria-label={speaker.name}
                  image={<EuiImage size="m" src={speaker.imageLink}></EuiImage>}
                  footer={speaker.shortBio}
                  description={
                    <>
                      <EuiText color="success">
                        <strong>{speaker.title}</strong>
                      </EuiText>
                      <EuiBadge color="primary" iconType="branch">
                        {speaker.team}
                      </EuiBadge>
                      <EuiBadge color="warning" iconType="globe">
                        {speaker.location}
                      </EuiBadge>
                      <EuiBadge color="success" iconType="faceHappy">
                        {speaker.pronouns}
                      </EuiBadge>
                    </>
                  }
                  title={speaker.name}
                />
              </EuiFlexItem>
            )
          })}
        </EuiFlexGrid>
      </>
  )
}

export default SpeakersPanel
