# Social-Network-API

## Description
This is an API I created for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and Day.js to format timestamps. The seed data was created using Insomnia.
#

## Table of Contents


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

## Installation
- Download or clone this repository to use thi application on your local machine.
- Requires Node.js and MongoDB to run application
- To install the dependencies needed, run the command 'npm i' in the command line from the root directory.

## Usage
- To invoke the application, run 'npm start' in command line.
- Mongoose models will now be synced to the MongoDB database.
- 