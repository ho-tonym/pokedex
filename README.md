# Pokedex
The purpose of this app is for convenient comparisons of your pokemon against certain matchups to determine your best lineup. Specifically for Pokemon Go.

Under the My Pokemon section, we can add pokemon with their combat power (CP)

A MERN app that makes requests to the RESTFUL API pokeapi.co. We display the data about fetched pokemon to find their type advantages.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

1. git clone this repository
2. npm run install-client-server : to install dependencies in package.json
3. npm run both : to run both React and Express Server.

# How to use

I will guide you on how to use the applicaiton:

## Home
On loadup, we query for API for 20 pokemon. You can scroll down to load 20 more. In search located in the navbar, you can find a specific pokemon that you want more information on. Click on that pokemon to make a request to the API for more information. There is a bot navbar that contains the information of the pokemon you clicked on. If you click on it, it expands to show more information on the type weaknesses/strengths.

## My Pokemon
There are 3 tabs here:
### Add
Here, we can add pokemon and create a list of your pokemon by adding a name and combat power. If no pokemon match the name entered, we will make another request to the api to get the rest of the pokemon.
The CP has to be 0 < CP <9999.
### Save
It would be pretty inconvenient to have to add these pokemon everytime to use the app, so we can save the pokemon to the mongo server hosted on MongoDB Atlas. When it is finished saving to the DB, it will return a key that will be can be used to access the all the pokemon saved at a later time in the Get tab. I opted for a key based apporach rather than user/pw because it is more convenient.
### Get
Enter a key here to retrieve data from the backend server and load up previously saved pokemon.

# Built With
REACT - The web framework used
MongoDB - Database used
Express.js - Backend server that handles requests from REACT and responses from Mongo.
Node.js - React, express use node
Redux - State management
redux-thunk - for dispatching actions

License
This project is licensed under the MIT License - see the LICENSE.md file for details
