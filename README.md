---
page_type: sample
languages:
- javascript
- html
products:
- azure
description: "A Mongo + Express + React + Node.js Todo list demonstrating how to instrument your application (and Node.js backend) with Application Insights."
urlFragment: applicationinsights-mern-todo
---

# MERN Stack Application Insights Todo Demo
A Mongo + Express + React + Node.js Todo list demonstrating how to instrument your application (and Node.js backend) with Application Insights. Originally cloned from https://github.com/seeschweiler/mern-stack-part-04

## Requirements
- A local mongoDB server, use MongoDB Compass or run `mongod` in your terminal.

## Running the Demo
First start your local mongo server. Either use MongoDB Compass, or use
```zsh
mongod
```

The frontend and backend are separate projects -- first start the backend

```zsh
cd backend
npm install
npm run start
```

Start the frontend in a new terminal
```zsh
cd frontend
npm install
npm run start
```

## Future Todos
- 1 step run via docker so that local mongo is not required
