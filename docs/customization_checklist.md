## Welcome to EUI Event Template customization guide 

If you want to use this template for your own event, here is everything that you need to change along with a brief description of how to make the respective change. The guide has been divided by sections of the web app:

### Nav Bar:

- [ ] **Change logo and favicon:** Go to [consts.js](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/data/consts.js#L12) and replace the placeholder rainbow cluster link with a link of your event’s logo.

- [ ] **Change logo text:** Go to [rainbowLetters.jsx](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/utilities/rainbowLetters.jsx#L27) and replace "{rainbowedLetters} SUMMIT" with the name of your event. 

- [ ] **Change date and time:** Go to [consts.js](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/data/consts.js#L1). Within the _sessionOne object_ and the _sessionTwo object_, there will be dateAndTime attributes. Replace the date and time with your event’s sessions. Keep the format intact.

- [ ] **Change Add to Calendar link:** Go to [consts.js](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/data/consts.js#L1). Within the _sessionOne object_ and the _sessionTwo object_, there will be calendarLink attributes. Replace the placeholder with your Add to Calendar link. 

### Event Details:

- [ ] **Replace hero image:** Go to [EventDetails.jsx](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/components/panels/EventDetails.jsx#L13). Within the _renderHero function_, replace the existing URL in the src attribute with the URL of your hero image. Replace the alt attribute’s text with text appropriate for your hero image. 

- [ ] **Replace hero title and subtitle:** Go to [speakers.js](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/data/speakers.js#L8). Within the _speakers array_, each speaker is listed as an object. Overwrite the placeholder information with your the actual information of your event’s speakers. If you want to add more speakers, add an additional object to the array. If you want to decrease the placeholder speakers, just remove the objects from the speakers array. 

### Speaker Details:


- [ ] **Change speaker avatar:** Go to the [images](https://github.com/brittanyjoiner15/eui-event-template/tree/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/images) folder. Delete the placeholder avatars. Add the avatars of your actual speakers to the images folder. Then go to [speakers.js](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/data/speakers.js#L1) and import the avatars of the respective speakers from the images folder. Then replace the placeholder avatar in the speaker objects with your actual avatars.

- [ ] **Change speaker layout:** This is an optional change. Depending on the number of speakers in your event, you may want to change the layout of the speakers section. Go to [SpeakersPanel.jsx](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/components/panels/SpeakersPanel.jsx#L52) and replace the value of columns attribute within the EuiFlexGrid tag. The current placeholder value is 3, which is why the speaker section renders with 3 columns.  

### Talks:

- [ ] **Change schedule**: Go to [talks.js](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/data/talks.js#L7) . The _talks_ array holds each individual talk as an object. Each object has attributes. You can start by overwriting the placeholder attributes. If you need to add more talks, add objects to the _talks_ array. If you need to remove talks, just delete the respective objects from the _talks_ array. Do note that the time in the sessionTime attribute is in GMT. **All attribute formats must be maintained**.

- [ ] **Replace placeholder in Add to Cal for respective talk sessions**: Go to [TalksPanel.jsx](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/components/panels/TalksPanel.jsx#L117) and replace the “Sept 8th” value with the date of your first session, the  “#” with a link to the calendar for the date of your event's first session and the “?” with a link to the calendar for the date of your event's second session. **Keep the format for the date same as you have used for the buttons, otherwise the comparison will fail**.   

### Bottom Bar:
- [ ] **Change host name:** Go to [BottomBar.jsx](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/components/BottomBar.jsx#L18) and replace the placeholder host name "Hosted by Elastic's Rainbow Stack ERG" with your event’s host name.

- [ ] **Change host subtitle:** Go to [BottomBar.jsx](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/components/BottomBar.jsx#L20) and replace the placeholder host subtitle "Group for LGBTQIA+ members and allies" with your event host’s subtitle.

- [ ] **Change button texts:** Go to [BottomBar.jsx](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/components/BottomBar.jsx#L20) and replace the placeholder button texts "Sign up for updates" and "Join the slack group" with your own texts if needed.

- [ ] **Change button links:** Go to [BottomBar.jsx](https://github.com/brittanyjoiner15/eui-event-template/blob/8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463/src/components/BottomBar.jsx#L24) and replace the href placeholder value "#" in the EuiButton tag with the link you want the visitor to go to after clicking on the button.


