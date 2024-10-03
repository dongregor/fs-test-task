## Description
This directory holds the backend of the fullstack application. It is built using Node.js and Express.js, and it interacts with a MongoDB database.

## Prerequisites

Before running the backend, make sure the following dependencies are installed on your system:

- Node.js (v18.x or later)
- MongoDB (running locally or accessible via a connection string if not using Docker)
- Docker (if running from a container)

## Available Scripts

Start the backend server in a container:

```bash
npm run dev:be
```

Install the packages for frontend part:

```bash
npm run install:fe
```

Start the frontend application:

```bash
npm run dev:fe
```

Test the e2e integration:

```bash
npm run test
```

## Environment Variables
The application requires a proper environment variable to connect to the MongoDB database, as well as to change PORT, the server will run on. You may want to use a .env file (use .env.sample for template) or directly configure them in your deployment environment.