## Welcome to EUI Event Template customization guide 

If you want to use this template for your own event, here is everything that you need to change along with a brief description of how to make the respective change:

### Nav Bar:

- [ ] **Change logo and favicon:** Follow the path ```eui-event-template/src/data/consts.js```. In the ```const.js``` file, on _line 12_, replace the placeholder rainbow cluster link with a link of your event’s logo.

- [ ] **Change logo text:** Follow the path ```eui-event-template/src/utilities/rainbowLetters.jsx```. In the ```rainbowLetters.jsx``` file, on _line 27_, replace "{rainbowedLetters} SUMMIT" with the name of your event. 

- [ ] **Change date and time:** Follow the path ```eui-event-template/src/data/consts.js```. In the ```const.js``` file, _within the sessionOne and sessionTwo objects_, there will be dateAndTime attributes. Replace the date and time with your event’s sessions. Keep the format intact.

- [ ] **Change Add to Calendar link:** Follow the path ```eui-event-template/src/data/consts.js```. In the ```const.js``` file, _within the sessionOne and sessionTwo objects_, there will be calendarLink attributes. Replace the placeholder with your Add to Calendar link. 

### Event Details:

- [ ] **Replace hero image:** Follow the path ```eui-event-template/src/components/panels/EventDetails.jsx```. In the ```EventDetails.jsx``` file, _within the renderHero function (lines 13 - 21)_, replace the existing URL in the src attribute with the URL of your hero image. Replace the alt attribute’s text with text appropriate for your hero image. 

- [ ] **Replace hero title and subtitle:** Follow the path ```eui-event-template/src/data/speakers.js```. In the ```speakers.js``` file, _within the speakers array (line 8)_, each speaker is listed as an object. Overwrite the placeholder information with your the actual information of your event’s speakers. If you want to add more speakers, add an additional object to the array. If you want to decrease the placeholder speakers, just remove the objects from the speakers array. 

- [ ] **Change speaker avatar:** Follow the path ```eui-event-template/src/images/```. Delete placeholder avatars. Add the avatars of your actual speakers to the images folder. Then follow the path ```eui-event-template/src/data/speakers.js```. In the ```speakers.js``` file, import the avatars of the respective speakers from the images folder and replace the placeholder avatar in the speaker objects with your actual avatars.

- [ ] **Change speaker layout:** This is an optional change. Depending on the number of speakers in your event, you may want to change the layout of the speakers section. Follow the path ```eui-event-template/src/components/panels/SpeakersPanel.jsx```. In the ```SpeakersPanel.jsx``` file, replace the value of columns in _line 52_. The current placeholder value is 3, which is why the speaker section renders with 3 columns.  

### Talks:

- [ ] **Change schedule**: Follow the path ```eui-event-template/src/data/talks.js```. In the ```talks.js``` file, there is a _talks array (line 7)_ holding each individual talk as an object. Each object has attributes. You can start by overwriting the placeholder attributes. If you need to add more talks, add objects to the _talks_ array. If you need to remove talks, just delete the respective objects from the _talks_ array. Do note that the time in the sessionTime attribute is in GMT. **All attribute formats must be maintained**.

- [ ] **Replace placeholder in Add to Cal for respective talk sessions**: Follow the path ```eui-event-template/src/components/panels/TalksPanel.jsx```. In the ```TalksPanel.jsx``` file, on _line 117_, replace the “Sept 8th” value with the date of your first session, the  “#” with a link to the calendar for the date of your event's first session and the “?” with a link to the calendar for the date of your event's second session. **Keep the format for the date same as you have used for the buttons, otherwise the comparison will fail**.   



