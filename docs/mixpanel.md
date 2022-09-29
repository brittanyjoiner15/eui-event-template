### What is Mixpanel?
It is an analytic tool that gets you insighst on how users interact with your digital product. These insights will help enable you to make decisions on how your users can get the best out of your digital productand and eventually retain them.

### How to set it up?
1. Create an account ( sign up with SSO or email and password)
2. Go to settings
    - Get your access tokens ( Project token and if needed API token)
3. Create a project ( React project with create-react-app for example )
4. Go to Mixpanal docs, 
    - Look for SDK integrations
    - Choose JavaScript programming language
    - Run `npm install --save mixpanel-browser` to install the package
5. After installing the package, open your text editor,
    - Import mixpanel like so `import mixpanel frommixpanel-browser`
    - Initialize the mix panel in your App.js file like so `mixpanel.init("<project token>")` note that for production, you will need to set it up in your .env file
