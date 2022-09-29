## Welcome to EUI Event Template customization guide 

If you want to use this template for your own event, here is everything that you need to change along with a brief description of how to make the respective change:

### Nav Bar:

- [ ] **Change logo and favicon:** Follow the path ```eui-event-template/src/data/consts.js```. In the ```const.js``` file, on _line 12_, replace the placeholder rainbow cluster link with a link of your event’s logo.
- [ ] **Change logo text:** Follow the path ```eui-event-template/src/utilities/rainbowLetters.jsx```. In the ```rainbowLetters.jsx``` file, on _line 27_, replace "{rainbowedLetters} SUMMIT" with the name of your event. 
- [ ] **Change date and time:** Follow the path ```eui-event-template/src/data/consts.js```. In the ```const.js``` file, _within the sessionOne and sessionTwo objects_, there will be dateAndTime attributes. Replace the date and time with your event’s sessions. Keep the format intact.
- [ ] **Change Add to Calendar link:** Follow the path ```eui-event-template/src/data/consts.js```. In the ```const.js``` file, _within the sessionOne and sessionTwo objects_, there will be calendarLink attributes. Replace the placeholder with your Add to Calendar link. 

