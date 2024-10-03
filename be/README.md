## Description
This is a fullstack web application. The frontend is built using React, while the backend is built using Node.js and Express.js, with MongoDB for the database.

## Prerequisites

Before running the application, make sure the following dependencies are installed on your system:

- Node.js (v18.x or later)
- MongoDB (running locally or accessible via a connection string if not using Docker)
- Docker (if running from a container)

## Available Scripts

To start the backend server, use:

```bash
npm start
```

Start the Server in Watch Mode using nodemon:

```bash
npm run watch
```

## Docker
The backend can be containerized using Docker. A Dockerfile is included in this directory. To build and run the backend service using Docker, ensure you have Docker installed, and run:

```bash
docker build -t backend .
docker run -p 3000:3000 backend
```

## Environment Variables
The application requires a proper environment variable to connect to the MongoDB database, as well as to change PORT, the server will run on. You may want to use a .env file (use .env.sample for template) or directly configure them in your deployment environment.