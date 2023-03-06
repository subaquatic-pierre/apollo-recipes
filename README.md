# React Apollo Recipes App

This app is designed for users to create recipes and share them with their friends,
leveraging the power of React, Apollo and GraphQL.

### Feel free to sign-up and create you own recipe !!

### Website URL:

[recipes-app](https://apollo-recipes.zeroisone.io)

## Development Usage

### Help needed

- Update deps

## Installation

Requirements:

- MongoDB
- Node v18 or higher

1. Clone the repo

2. Install server dependencies

```sh
cd server
npm install --legacy-deps
```

3. Install client dependencies

```sh
cd client
npm install --legacy-deps
```

## Development Mode

Copy .env.example to .env in both server and client directories

- Client runs at 127.0.0.1:8006
- Server runs at 127.0.0.1:8005

1. Run backend

```sh
cd server
npm run dev
```

2. Run client

```sh
cd client
npm run start
```

### Project Stats

While creating the app, emphasis was placed on testing React components with React Testing Library.

All queries and mutations to the database are optimistically updated within the UI before being updated from server data.

The front-end is served with ApolloClient while the backend utilizes ApolloServer.

The back-end server is connected to a MongoDB which is hosted locally on the EC2 instance.

## Features:

- User Registration
- Live Search
- User login / logout
- Create / Delete recipes
- Like recipes

## Technologies

- React
- Material UI
- Apollo Client
- Apollo Server
- React Testing Library
- Mongo DB
- GraphQL
- Nginx
- AWS
