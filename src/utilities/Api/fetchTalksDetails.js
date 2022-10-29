import axios from "axios";
import { webAppUrl as url } from "../env";
import { wrapPromise } from "./wrapPromise";

// returns the fetched promise from google sheet about talks details in the form of
// wrapped promise for react suspense to take care of.

export const fetchTalk = () => {
  const talksPromise = fetchTalksData;
  return {
    talks: wrapPromise(talksPromise),
  };
};

async function fetchTalksData() {
  return axios
    .get(`${url}?sheetName=Talks`)
    .then((res) => res.data.talks)
    .catch((err) => console.log(err));
}
