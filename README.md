# JB Management Tool

JB Management is a web app designed to help one-person operations. It helps
small business owners to keep track of the services they provide and a list of
clients (reports are yet to be implemented).

## Technologies
The following technologies were used to develop the front-end of this app:
- Used HTML, CSS, Javascript, Handlebars, JQuery

## Approach
The idea of this project came from a personal experience of managing a small
service business.
The planning phase consisted in modeling ERDs and thinking of the actions for
each one of them (based on user stories). Then implemented one by one, making
sure that each one them worked before moving to the next one.

Only after having all the communication between client and server, tested with
curl scripts and later on the browser, I started to work on User Interaction,
using JQuery to ping the API and handlebars to handle the responses.


## Unsolved Problems
- The user can't get any reports like total income reports, number of clients, a service index per
client. (feature yet to be implemented).
- Improve styling
- Adding instructions to the user.

## Dependencies
```npm install``` to install dependencies

## Data Models
The ERD of this project can be found here: http://i.imgur.com/ye86YeY.jpg


## User stories

- As a user, I want to be able to create clients;
- As a user, I want to view a list of clients;
- As a user, I want to be able to create a service record for a given client;

## Wireframes
Wireframes can be found here: http://i.imgur.com/QdzM7v0.jpg

## Project Links
[FRONTEND-DEPLOY]  https://jbeltrami.github.io/jb-management-client/

[FRONTEND-REPO]  https://github.com/jbeltrami/jb-management-client

[BACKEND-DEPLOY]  https://jb-management.herokuapp.com/

[BACKEND-REPO]  https://github.com/jbeltrami/jb-management-server
