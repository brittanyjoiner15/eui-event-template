### What is Mixpanel?
It is an analytic tool that gets you insighst on how users interact with your digital product. These insights will help enable you to make decisions on how your users can get the best out of your digital productand and eventually retain them.

Get an overview of the Mixpanel: https://developer.mixpanel.com/docs/what-is-mixpanel 

### How to set it up?

- Run `npm install --save mixpanel-browser` or `yarn add mixpanel-browser` to install the package
- After installing the package, open your text editor,
    - In App.js, paste the following code:
    ``` 
    import mixpanel from 'mixpanel-browser';
    // or with require() syntax:
    // const mixpanel = require('mixpanel-browser');

    // Enabling the debug mode flag is useful during implementation,
    // but it's recommended you remove it for production
    mixpanel.init('YOUR_TOKEN', {debug: true}); 
    mixpanel.track('Sign up'); 
    ```

