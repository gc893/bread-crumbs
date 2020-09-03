![img](https://i.imgur.com/25zouSk.jpg)
# Breadcrumbs-io

### [Go to App](https://breadcrumbs-io.herokuapp.com)

## Objectives

*Create an app that allows the users to search and read and comment Node guides to help them remember the main steps of buidilding a node app.*

*The app will also let an admin user create, edit and delete guides (and steps inside those guides) to easily maintain the content of the guides.*

## Technologies

- HTML
- CSS
- JS
- Node.js
- Express
- MongoDB
- Mongoose
- Git
- Prism.js
- FontAwesome
- getbootstrap.com

## Wirefreame

![img](https://i.imgur.com/7BSixhE.png)

## User Stories

- As a user (AAU) I would like to see a board with clear borders
- AAU I would like to see where the snake is on the board
- AAU I would like to start the game by clicking any of the arrows on the keyboard
- AAU I would like to see the snake move on the board
- AAU I would like to change the direction of the snake
- AAU I would like to see "food" items on the board
- AAU I would like the snake to grow each times it intersects a box with food
- AAU I would like to see my score
- AAU I would like to see a message when the snake intersects a boarder of the board with my total score
- AAU I would like to start a new game every time one ends
- AAU I would like to change the speed of the snake by clicking on a button

## Features

- Variable speed
- Point System

## Stretch Goals

- ~~Add bonus items~~
- ~~Add help modal~~
- Improve invalid move animation
- Mobile Responsive
- Record High Score

## To-Dos

- Create all the boxes inside the board from Js

- Define active/Inactive/has-food classes in css

- Activate the inital boxes (create snake)

- generate 2 random numbers to place "food" in the board

- write timed logic to "move the snake" by activating/inactivating boxes.

- Add event listeners to keyboard arrows to modify the direction (i,j counters) of the snake and move the snake

- write direction logic to change the direction of the snake

- Write "win" logic. Add 1 point to counter when cell changes from "has-food" class to "active" class. 

- write "loose" logic when "next-box" is undefined.

- modify snake speed (Easy, Medium, Difficult) with button groups