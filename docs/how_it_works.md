## Visual Components

- Main Page Layout
  - Checks for state of the selected tab
  - Switch statement to define which componenets show based on the tab you've selected
  - `tabs` object that defines onClick events to set state, and what content to show
  - `EuiPage`, `EuiPageHeader`, and `EuiPageContent` components to host content
- Panels
  - Event Details
    - `EuiImage` with a hero image
    - `EuiEmptyPrompt` with title, body, and actions (buttons)
  - Speakers
    - Maps through each object in the Speakers array to create an `EuiCard` with their info
    - Includes using `EuiBadge` with icons to specify things like where they're from and their team
  - Talks
    - Checks for state of local time
    - Defines columns of the table, like date, time, title, description, speaker, genre, and any associated actions (in this case, a link to add to calendar)
    - Gets a user's local timezone
    - Uses `moment.tz` to switch the time to a user's local time zone
    - Creates `EuiBadge` to render nice badges/tags for the genre type
    - Adds a button above the table to toggle the times to be shown in a set time zone, or in a user's time zone
    - Renders a table with all the data from talks mapped out by columns defined in `columns`
  - Talks TBD
    - Panel that can be used before talks are available
    - Shows a CTA with information about submitting a talk and a link to a google form
- NavBar
  - Uses `EuiPageHeader` to create bar with icon, text, and buttons
- Footer/Bottom Bar
  - `EuiText` and `EuiButton` elements for CTAs and more infromation

## Notable functions

- Add Calendar Buttons
  - Creates buttons for claendar
- Rainbow letters
- Convert to local timezone

## Data

- Speaker data (JSON file)
  - Format:
- Talk dat
