import { speakers } from "./speakers";

const findSpeaker = (name) => {
  return speakers[speakers.findIndex((speaker) => speaker.name === name)];
};

const setSessionDetails = (session, order) => {
  let sessionDetails = {};
  let date = session === "1" ? "Sept 8th" : "Sept 13th";
  let calendarLink =
    session === "1"
      ? "https://calendar.google.com/event?action=TEMPLATE&tmeid=NG0zaDJ1aG45dXU1bWthYTVwbWtrNHQ4MmogYnJpdHRhbnkuam9pbmVyQGVsYXN0aWMuY28&tmsrc=brittany.joiner%40elastic.co"
      : "https://calendar.google.com/event?action=TEMPLATE&tmeid=NmFsaGNxMnZjOThnMGRoaXByM25kczk0MDUgYnJpdHRhbnkuam9pbmVyQGVsYXN0aWMuY28&tmsrc=brittany.joiner%40elastic.co";
  let timestamp = "";

  switch (order) {
    case 1:
      timestamp =
        session === "1"
          ? "2022-09-08T20:00:00.000Z"
          : "2022-09-13T15:00:00.000Z";
      break;
    case 2:
      timestamp =
        session === "1"
          ? "2022-09-08T20:10:00.000Z"
          : "2022-09-13T15:10:00.000Z";
      break;
    case 3:
      timestamp =
        session === "1"
          ? "2022-09-08T20:20:00.000Z"
          : "2022-09-13T15:20:00.000Z";
      break;
    case 4:
      timestamp =
        session === "1"
          ? "2022-09-08T20:30:00.000Z"
          : "2022-09-13T15:30:00.000Z";
      break;
    case 5:
      timestamp =
        session === "1"
          ? "2022-09-08T20:40:00.000Z"
          : "2022-09-13T15:40:00.000Z";
      break;
    case 6:
      timestamp =
        session === "1"
          ? "2022-09-08T20:50:00.000Z"
          : "2022-09-13T15:50:00.000Z";
      break;
    default:
      timestamp = "TBD";
      break;
  }
  return (sessionDetails = {
    calendarLink,
    date,
    timestamp,
  });
};

export const talks = [
  {
    sessionDetails: setSessionDetails("1", 4),
    title: "Making Tech Careers Accessible for Everyone",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "Career",
    speaker: findSpeaker("Brittany Joiner"),
  },
  {
    sessionDetails: setSessionDetails("1", 6),
    title: "How To Find Peace In The Chaos Of The World",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "Self Care",
    speaker: findSpeaker("Kiley Davidson"),
  },
  {
    sessionDetails: setSessionDetails("1", 5),
    title: "Diversity in Tech Panel",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "LGBTQIA+",
    speaker: findSpeaker("Priscilla Parodi"),
  },
  {
    sessionDetails: setSessionDetails("2", 1),
    title: "Desana and How Remote Employees Can Use It",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "Career",
    speaker: findSpeaker("Corey Williams"),
  },
  {
    sessionDetails: setSessionDetails("2", 2),
    title: "How to Find and Support LGBTQIA+ Orgs",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "LGBTQIA+",
    speaker: findSpeaker("Kristina Paiz"),
  },
  {
    sessionDetails: setSessionDetails("2", 3),
    title: "How To Make Music",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "Self Care",
    speaker: findSpeaker("Julio Camarero"),
  },
  {
    sessionDetails: setSessionDetails("2", 4),
    title: "Something Really Cool But We Don't Know Yet",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "TBD",
    speaker: findSpeaker("Anderson Queiroz"),
  },
  {
    sessionDetails: setSessionDetails("2", 5),
    title: "Best LGBTQIA+ Twitter Accounts",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "LGBTQIA+",
    speaker: findSpeaker("Wes Mason"),
  },
  {
    sessionDetails: setSessionDetails("2", 6),
    title: "Something Interest I'm Sure You'll Want To Hear",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "TBD",
    speaker: findSpeaker("Javier Detrinidad"),
  },
  {
    sessionDetails: setSessionDetails("1", 1),
    title: "Queer Literature and Book Club Kickoff",
    description:
      "Take a deep dive into new releases in queer literature and the kick off for the Rainbow Stack Book Club!",
    genre: "LGBTQIA+",
    speaker: findSpeaker("Cory Fairchild"),
  },
  {
    sessionDetails: setSessionDetails("1", 1),
    title: "What Elastic Security and Pro Wrestling Have in Common",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "Elastic",
    speaker: findSpeaker("Dany Johnson"),
  },
  {
    sessionDetails: setSessionDetails("2", 4),
    title: "Something Really Cool But We Don't Know Yet",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "TBD",
    speaker: findSpeaker("David Ricordel"),
  },
  {
    sessionDetails: setSessionDetails("2", 4),
    title: "Something Really Cool But We Don't Know Yet",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "TBD",
    speaker: findSpeaker("Alejandro Sánchez"),
  },
];
