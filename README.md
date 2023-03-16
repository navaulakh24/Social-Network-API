# Social-Network-API

## Description
This is an API I created for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and Day.js to format timestamps. The seed data was created using Insomnia.
#

## Table of Contents
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Demo
- Click [here](https://drive.google.com/file/d/1yxDgOI8n5hCE4Wnp1w3ICG7I9VmUE7sS/view) for the demo video

On Insomnia, the following API routes have been created and used to add, update, or remove users, friends, thoughts and reactions in the user's database.

**USER**
- GET all users: Get all users: `GET /api/users`
- Create a new user: `POST /api/users`
- Update a user by its `id`: `PUT /api/users/:userId`
- Delete a user by its `id`: `DELETE /api/user/:userId`

**THOUGHT** 
- Get all thoughts: `GET /api/thoughts/`
- Create a new thought: `POST /api/thoughts/`
- Update a thought by its `id`: `PUT /api/thoughts/:thoughtId`
- Delete a thought by its `id`: `DELETE /api/thoughts/:thoughtId`

**FRIEND**
- Add a new friend to a user's friend list: `POST /api/users/:userid/friends/:friendId`
- Delete a friend from a user's friend list: `DELETE /api/users/:userid/friends/:friendId`

**REACTION**

- Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
- Delete a reaction by the `reactionId`: `DEL /api/thoughts/:thoughtId/reactions/:reactionId`


## Installation
- Download or clone this repository to use thi application on your local machine.
- Requires Node.js and MongoDB to run application
- To install the dependencies needed, run the command 'npm i' in the command line from the root directory.
#

## Usage
- To invoke the application, run 'npm start' in command line.
- Mongoose models will now be synced to the MongoDB database.
- Open MongoDB and connect to the URI. Click on the database to see thoughts and users data.
- You can create seed data and test the API routes in Insomnia.
#
## Questions
GitHub: navaulakh24

GitHub Repo: https://github.com/navaulakh24/Social-Network-API

Email: navdeep_aulakh24@hotmail.com