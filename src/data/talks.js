import { speakers } from "./speakers";

const findSpeaker = (name) => {
  return speakers[speakers.findIndex((speaker) => speaker.name === name)];
};

export const talks = [
  {
    sessionDate: "Sept 8th",
    sessionTime: "2022-09-08T20:00:00.000Z",
    title: "Making Color Coding Cooler",
    description:
      "We think that colors and organization isn't cool. Well, it's actually the coolest thing that ever existed.",
    genre: "Business",
    speaker: [findSpeaker("Leslie Knope"), findSpeaker("Tom Haverford")],
  },
  {
    sessionDate: "Sept 8th",
    sessionTime: "2022-09-08T20:20:00.000Z",
    title: "Coming Up With Product Ideas",
    description:
      "Come listen to the man who created glitter butter and DJ Roomba and get tips to come up with new product ideas.",
    genre: "Business",
    speaker: [findSpeaker("Tom Haverford")],
  },
  {
    sessionDate: "Sept 8th",
    sessionTime: "2022-09-08T20:40:00.000Z",
    title: "The Art of Watching Paint Dry",
    description:
      "After you've made something with your hands, you'll want to stain it or paint it to give it color. You think the work happens when you paint, but it's actually watching the paint dry.",
    genre: "Arts",
    speaker: [findSpeaker("Ron Swanson")],
  },
  {
    sessionDate: "Sept 13th",
    title: "Star Wars vs Star Trek",
    description:
      "Learn why Star Wars is more super than Star Trek because of beets, bears, and battlestar galactica.",
    genre: "Arts",
    speaker: [findSpeaker("Dwight Schrute")],
  },
  {
    sessionDate: "Sept 13th",
    sessionTime: "2022-09-13T15:00:00.000Z",
    title: "Getting Into Cornell",
    description:
      "An acapella performance explaining the process of getting into a university.",
    genre: "Education",
    speaker: [findSpeaker("Andy Bernard"), findSpeaker("Ron Swanson")],
  },
  {
    sessionDate: "Sept 13th",
    sessionTime: "2022-09-13T15:50:00.000Z",
    title: "Why The World Has Lost It's Morals",
    description:
      "Our world is going to hell in a handbasket and it's time we do something about it!",
    genre: "Off Topic",
    speaker: [findSpeaker("Angela Martin")],
  },
];
