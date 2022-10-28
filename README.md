![Hacktoberfest themed banner for repo](https://user-images.githubusercontent.com/89431059/194469940-b753d9d3-7d63-4b22-b144-76afbf228a92.png)

## Happy Hacktoberfest!!

_I remember my first Hacktoberfest so clearly because I was so intimidated by Git and contributing code to other repos, and I was still VERY early in my coding journey and didn't even know how to code, but enjoyed the experience so much!_

_Hacktoberfest holds a special place in my heart because it's a great way to get started into coding and comfortable with Github. I'm so excited to finally maintain a repo that I can help others experience the same joy I did!_

Want to participate in [Hacktoberfest](https://hacktoberfest.com/)? All you have to do is sign up, and then successfully merge 4 pull requests in the month of October! Check out our [contributing guidelines](https://github.com/brittanyjoiner15/eui-event-template/blob/main/CONTRIBUTING.md) and [open issues](https://github.com/brittanyjoiner15/eui-event-template/issues?q=is%3Aopen+is%3Aissue) to participate from this repo!

![](https://firebasestorage.googleapis.com/v0/b/photo-url-generator-e736c.appspot.com/o/posts%2FZaQRmT7oKMwu9dgUV1bf%2Fimage?alt=media&token=acb8b002-fa77-4bb7-98d6-9195adfa41f4)

# React + Eui Template for An Event Website

This is a template for an event-based website. The website was created for an event my ERG was hosting ([Rainbow Stack Summit](https://www.rainbowstacksummit.com/)), but I decided to make its own repository so others can contribute to it and use it as well!

This is all very much Work In Progress, so if you have any comments or ideas, or want to contribute, feel free to create an issue.

## Demo

View a live demo of the site hosted on [Vercel](https://eui-event.vercel.app/)

## Running Locally


- Clone the project by running `git clone https://github.com/<your-username>/eui-event-template.git` in your terminal, or by using the Github Desktop UI
- Cd to the repo on your local machine - `cd eui-event-template`
- Install dependencies by running `yarn install`
- Run `yarn start` to start the project

- Go to localhost:3000 in your browser to view it!

Note that: If you wish to use the project for your own purposes, you can clone it as mentioned above or check `use this template` from the top. If you wish to make a contribution to the repository, you will have to fork the repository as well.

## Connect Google Sheets with your app

Follow these steps to connect your google sheets file with the app.

- **Create a google sheet**

1.  Go to https://docs.google.com/ and create a blank sheet
2.  Add name, title, team, location, shortBio, pronouns, imageLink headers in the sheet (make sure the order of headers is same as in the example sheet provided below).
3.  Populate the sheet with some data.
    ```
    ##### Data Schema
    SPEAKERS                                                 SIGN UP
    name : string                                            name  : string
    title: string                                            email : string
    team: string
    location: string
    shortBio: string
    pronouns: string
    imageLink: string (url of hosted image)
    ```
4.  Change the tab name to "Speakers" (Tab name "Speakers" is case sensitive).
    <br>

![](https://i.postimg.cc/MGPDVgkF/Sheet-Demo.jpg)

**Example sheet**:
https://docs.google.com/spreadsheets/d/1XgyHXaReTZ3Nq_r7QS18GDvqK_ht010QqnI6PXAnePA/edit?usp=sharing

<br>

- **Deploy App Script Web App**

1.  Open your google sheet.
2.  Click on Extensions tab.
3.  Click on App Script.

![](https://i.postimg.cc/x8BPkmzp/App-Script.jpg) 4. Delete all the code from the editor (inside Code.gs file).

```
        // Get requests
        function doGet(req) {
            if(req.parameters.sheetName == "Speakers") {
                return getSpeakersData()
            } else if(req.parameters.sheetName == 'Talks') {
                return getTalksData()
            }
        }

        // speaker requestHandler
        function getSpeakersData() {
            var doc = SpreadsheetApp.getActiveSpreadsheet()
            var sheet = doc.getSheetByName("Speakers")
            var values = sheet.getDataRange().getValues()

            var output = []
            for(var i=1; i<values.length; i++) {
                var row = {}
                row['name'] = values[i][0]
                row['title'] = values[i][1]
                row['team'] = values[i][2]
                row['location'] = values[i][3]
                row['shortBio'] = values[i][4]
                row['pronouns'] = values[i][5]
                row['imageLink'] = values[i][6]

                output.push(row)
            }

            return ContentService.createTextOutput(JSON.stringify({speakers: output})).setMimeType(ContentService.MimeType.JSON)
        }
        // talk requestHandler
        function getTalksData() {
            var doc = SpreadsheetApp.getActiveSpreadsheet()
            var sheet = doc.getSheetByName("Talks")
            var values = sheet.getDataRange().getValues()

            var output = []
            for(var i=1; i<values.length; i++) {
                var row = {}
                row['date'] = values[i][0]
                row['time'] = values[i][1]
                row['title'] = values[i][2]
                row['description'] = values[i][3]
                row['genre'] = values[i][4]
                row['speaker'] = values[i][5].split(',')
                row['speakersImageLink'] = values[i][6].split(',')
                output.push(row)
            }

            return ContentService.createTextOutput(JSON.stringify({talks: output})).setMimeType(ContentService.MimeType.JSON)
        }
        // post requests
        function doPost(e){
            let action = e.parameter.action
            if(action == "signup"){
                return signUp(e)
            }
        }
        // signup requestHandler
        function signUp(e){
            var doc = SpreadsheetApp.getActiveSpreadsheet()
            var sheet = doc.getSheetByName("signup") // name of your sheet where user details would be saved.
            let user = JSON.parse(e.postData.contents)
            sheet.appendRow([user.name,user.email])
            return ContentService.createTextOutput(JSON.stringify({status: "success", "data": "my-data"})).setMimeType(ContentService.MimeType.JAVASCRIPT);
        }

```

5. Paste above code in the Code.gs file.
6. Click on Deploy button and select New Deployment.

![](https://i.postimg.cc/43DGfL8r/New-deployment.jpg)

7. Click on settings icon on select type menu and select web app.

![](https://i.postimg.cc/jjW3jRmj/Deployment-settings.jpg)

8. Add Description.
9. Select Anyone in who has access section and click deploy.
10. Authorize access.
    Google might say it's an unverified app and tell you to go back to safety its because the app that you are creating will have access to your sheet data but since you are developing the application so essentially you are accessing your data only, which is totally safe.
11. Copy the Web URL.
    Make sure you **do not share the Web URL** with anyone else because if you do so then that person can access your data.
    ![](https://i.postimg.cc/1Xzq937C/Copy-url.jpg)

- **Configure local project**

1. Open project folder, go to src/utilities/env.js
2. Replace the string webAppUrl with the Web URL you copied.

![](https://i.postimg.cc/9fJXcY32/Env-file.jpg)

3. Refresh the speakers page to see the results.

## Contributing

Want to contribute and improve something here? I would love that! Check out the[contributing guidelines](https://github.com/brittanyjoiner15/eui-event/blob/main/CONTRIBUTING.md), then [head to issues](https://github.com/brittanyjoiner15/eui-event/issues) and look for open issues. If you need any help or clarification, just comment on there and let me know. Also, feel free to submit your own issues if you have ideas!

**UPDATE: I am so excited by how many folks want to contribute to this repo! I'm trying to create new requests to keep up with the demand but if you have any ideas of how you can improve the app, please feel free to open an issue with your recommendations, and I'll be happy to review it and if it aligns, I'll assign it to you!**

## License

Source code in this repository is covered by (i) a dual license under the Server
Side Public License, v 1 and the Elastic License 2.0 or (ii) an Apache License
2.0 compatible license or (iii) solely under the Elastic License 2.0, in each
case, as noted in the applicable header. The default throughout the repository
is a dual license under the Server Side Public License, v 1 and the Elastic
License 2.0, unless the header specifies another license.
