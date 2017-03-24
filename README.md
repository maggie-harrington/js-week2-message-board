# Message Board

#### _Epicodus JavaScript Week 2 Independent Project - Ember_

#### _By Maggie Harrington_
###### _3-24-17_


## Description

###### An application written in JavaScript to demonstrate the following skills:
* Create a working application using Ember.
* Use routes to control navigation through the application.
* Use Handlebars to create dynamic elements in templates.
* Store and retrieve data using Ember Data models and Firebase.
* Manipulate data between models and templates using components.
* Use one-to-many relationship between two data models.


## Setup/Installation Requirements

* Make sure you have Node.js installed (see https://nodejs.org/en/download/ for installation details).

* Make sure you have Bower installed; run `npm install -g bower` (see https://bower.io/ for more installation details).

* If you are using OSX, make sure you have Watchman installed; run `brew install watchman` (see https://facebook.github.io/watchman/ for more installation details).

* Make sure you have Ember CLI installed; run `npm install -g ember-cli` (see https://ember-cli.com/user-guide/ for more installation details).

* Clone project at my GitHub repository: https://github.com/maggie-harrington/js-week2-message-board .

* Open the terminal and enter `cd Desktop`. Copy the link above, then type `git clone ` and enter the link. You will now have a copy of the project on your desktop.

* In the terminal, enter `cd js-week2-message-board`. You will now be in the top level of the project directory.

* Run the following in the command line to install packages:

    `npm install`

    `bower install`

    `ember install ember-bootstrap`

    `ember install emberfire`

* Now you are ready to load the project. Run `ember s` to start the server (localhost:4200).

* Make sure to keep the terminal window containing the server open while the project runs in your web browser.


## Known Bugs

No known bugs at this time.


## Support and contact details

If you run into any issues or have questions, ideas or concerns, please feel free to contact me at maggie.harrington@gmail.com


## Technologies Used

Written using Git Bash, Atom, JavaScript, Bootstrap, jQuery, Node.js, Node Package Manager (NPM), Bower, Ember, Handlebars, EmberFire, and Firebase


## MIT License

Copyright (c) 2017 Maggie Harrington



## Planning

### Specifications / project requirements

* Create a question and answer message board where a user submits a question and other users can respond with answers.
* Questions should have the content of the question itself, an author and additional notes.
* Answers should have the content of the answer and the author.
* Include a header and/or navbar that appears on all pages containing the name of your site and a link to the home page.
* List all questions on the homepage, with only the question and the name of the author showing.
* Users should be able to click on a question, and be routed to another page containing additional information.
* Allow users to add and edit questions.
* Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.


### Project stages

* Initial project setup (see details below in next section)
* Create index route
* Create navbar/header to appear on all pages containing site name and home link
* Firebase setup (see details below in next section)
* Create question model
* Create answer model
* Create question-tile component to display list of all questions on index page
* Create question route and question-detail-tile component to display details of an individual question, edit router.js to pass in question_id to question route
* Create form to add new questions
* Create form to edit questions
* Create form to add answers to a question (on question page)
* Display answers on question page
* Clean up code/ refactor
* Styling with SASS (if time allows)


### Project configuration / dependencies

###### Initial project setup:
* From command line, `cd Desktop`
* Run `ember new message-board`
* `cd js-week2-message-board`
* `npm install`
* `bower install`
* Initialize git repository and add remote
* `npm install -g ember-cli`
* `ember install ember-bootstrap`

###### Routes, models, and components:
* `ember g route routename` <- update router (router.js), generate route handler (app/routes/routename.js) and template (app/templates/routename.hbs)
* `ember g model modelname` <- generate model (app/models/modelname.js)
* `ember g component component-name` <- generates component (name MUST contain a dash): hbs template (app/templates/components/component-name.hbs) and JS source file (app/components/component-name.js)

###### Firebase setup:
* Run `ember install emberfire`
* Update config/environment.js with your firebase settings. You can find these at https://console.firebase.google.com/ by clicking the [Add Firebase to your web app] button on the project overview panel.
* Example:
In config/environment.js:
`var ENV = {
  ...
  firebase: {
      apiKey: 'YOUR-API-KEY-HERE',
      authDomain: 'YOUR-FIREBASE-APP.firebaseapp.com',
      databaseURL: 'https://YOUR-FIREBASE-APP.firebaseio.com',
      storageBucket: 'YOUR-FIREBASE-APP.appspot.com'
    },

    APP: {
    ...`
* Restart server after EmberFire config.
* Create hard-coded model data in a .json file (object containing arrays of objects, make sure to pluralize the model names).
* From within Firebase, navigate to the Database section of project and select Data tab, then select _Import JSON_ and navigate to file created above.
* In Rules tab, update read and write to true.
* Update model hook in route handler (app/routes/routename.js)
