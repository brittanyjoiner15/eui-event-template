# What is Mixpanel?
It is an analytic tool that gets you insighst on how users interact with your digital product. These insights will help enable you to make decisions on how your users can get the best out of your digital productand and eventually retain them.

Get an overview of the Mixpanel: https://developer.mixpanel.com/docs/what-is-mixpanel 

### How to set it up?

- On the Mixpanel dashboard, create a project and get the project token.

- Run `npm install --save mixpanel-browser` or `yarn add mixpanel-browser` to install the package;

- Import Mixpanel in your project: `import mixpanel from 'mixpanel-browser';`

- Initianilze Mixpanel anywhere you wish to use it `mixpanel.init('YOUR_TOKEN'});` replace the token with your project's token.

### Send events?
Let's track how many times the logo has been clicked in our App.

- Let's `mixpanel.track()` in our `onLogoClick` function.
- We need to precise an `event name` so we know what event we are tracking and in this case, we are tracking `Rainbow logo clicked` event in our `MainPage`
- The short code version looks like this:

``` 
import mixpanel from 'mixpanel-browser'; // importing mixpanel

mixpanel.init('YOUR_TOKEN'); // initializing mixpanel

function MainPage() {

   const onLogoClick = useCallback(() => {
    onSelectedTabChanged("event");
    mixpanel.track("Rainbow logo clicked") // Tracking logo click event
  }, []);

  return (
    <>
      <Navbar tabs={tabs} onLogoClick={onLogoClick} />
    </>
  );
}

export default MainPage;

```
- The full code should look like this: [link](../src/components/MainPage.jsx)

### Check for successful events
- To confrim your connection to Mixpanel was successful, check your `network tab` for a status `200`
![network tab 200 code](../src/images/networktab200.png)
- Go back to Mixpanel project dashboard click on `Events` to see all your events.
![mixpanel event dashboard](../src/images/mixpaneleventdashboard.png)

### Important links
- https://www.youtube.com/watch?v=H35FwN51tWQ
https://help.mixpanel.com/hc/en-us/articles/360021749032#music-finder 

