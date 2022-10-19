import axios from "axios";
import { webAppUrl as url } from "../env";
import { wrapPromise } from "./wrapPromise";

// returns the fetched promise from google sheet about speaker details in the form of
// wrapped promise for react suspense to take care of.

export const fetchSpeaker = () => {
  const speakersPromise = fetchSpeakersDetails;
  return {
    speakers: wrapPromise(speakersPromise),
  };
};

async function fetchSpeakersDetails() {
  return axios
    .get(`${url}?sheetName=Speakers`)
    .then((res) => res.data.speakers)
    .catch((err) => console.log(err));
}
