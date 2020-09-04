![img](https://i.imgur.com/WUU3cCv.png)
# Breadcrumbs-io

### [Go to App](https://breadcrumbs-io.herokuapp.com)

## Objectives

*Create an app that allows the users to search and read and comment Node guides to help them remember the main steps of buidilding a node app.*

*The app will also let an admin user create, edit and delete guides (and steps inside those guides) to easily maintain the content of the guides.*


## Screenshots

![img](https://i.imgur.com/aYr3U19.png)
![img](https://i.imgur.com/uuQamzr.png)
![img](https://i.imgur.com/A2n25D4.png)


## Technologies

- HTML
- CSS
- JS
- Node.js
- Express
- Express Generator
- MongoDB
- Mongoose
- MongoDB Atlas
- Heroku
- EJS
- Git


## Credits
- [David Stinson for the MVC Diagram](https://www.linkedin.com/in/david-stinson/)
- [Jim Clark for the Route Mapping table](https://www.linkedin.com/in/jimclarkfullstack)
- [FontAwesome for the Log In, Log out and LinkedIn icons](https://fontawesome.com/)
- [Prism](https://prismjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/)


## Wirefreames To-Dos and ERDs

[Trello](https://trello.com/b/XgjmNSJ6/breadcrumbsio)

## User Stories

- As a user (AAU) I would like to see the app on desktop and on mobile
- AAU I would like to see a description of the app
- AAU I would like to log in to the app
- AAU I would like to search for a guide
- AAU I would like to see the guide's content
- AAU I would like to store my progress on the guide
- AAU I would like to retrieve my progress on a guide
- AAU I would like to see other people's comments with their date
- AAU I would like to comment on a guide
- AAU I would like to see the average score of each guide
- AAU I would like to log out of the app
- As as admin (AAA) I would like to see an add guide button
- AAA I would like to be able to create guides from the app
- AAA I would like to add steps to each guide from the app
- AAA I would like to edit guides ans steps from the app
- AAA I would like to delete guides and steps from the guide
- AAA I would like to receive an email when a guide receives a score under 4.

## Features

- Styled code blocks
- Admin functionality

## Stretch Goals

- Store and retrieve a user's progress on a guide.
- ~~Program automatic email to admin when a review is under 4 points.~~
- Filter out invalid option combinations on the search page.

## Challenges

- Deep populate (mongoose)
  - [Mongoose Docs](https://mongoosejs.com/docs/populate.html#deep-populate)
- Using/Reading Query Strings (HTML GET Forms)
  - [HTML Memo - Page 46](https://www.ietf.org/rfc/rfc1866.txt)
  - [Express Query Strings](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)
- HTML Styled Code Blocks
  - [Prism](https://prismjs.com/)
  - [CDN](https://cdnjs.com/libraries/prism)
- Send Emails
  - [Nodemailer](https://nodemailer.com/about/)
  - [Tutorial](https://blog.mailtrap.io/nodemailer-gmail/)