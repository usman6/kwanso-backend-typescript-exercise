# Overview

## Users

Users are created in memory. User can be created, a user can login and a user can get it's profile.

## Tasks

Tasks like users are created in memory. User can create it's tasks. User can view it's tasks. Users can't view each other tasks.

# Postman Collection
 A postman collection of all APIs is located in docs folder.

# Setting up and Running the Application

```bash
//install node modules
npm i

npm install -g ts-node

```

#### Create User
```bash

curl --location --request POST 'localhost:8080/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"user2@example.com",
    "password": "12345678"
}'

```

#### Login
```bash

curl --location --request POST 'localhost:8080/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"user2@example.com",
    "password": "12345678"
}'

```

### Get User

```bash

curl --location --request GET 'localhost:8080/user' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjM4NDI5OTIsImlkIjoxLCJlbWFpbCI6InVzZXIyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTzRKaERGUE1LcFk5a0RhR3lSQ0txdVlSd1Q3ZEhVQkhoYXRwTEVZbXBxTFFacS9nUjNzVlMiLCJpYXQiOjE2MjM4MzkzOTJ9.NTlRtMRUoA-lDZiiiQDudxjOjibssTCDhNV92_EO5tQ'


```

### Create Task

```bash

curl --location --request POST 'localhost:8080/create-task' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjM4NDI5OTIsImlkIjoxLCJlbWFpbCI6InVzZXIyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTzRKaERGUE1LcFk5a0RhR3lSQ0txdVlSd1Q3ZEhVQkhoYXRwTEVZbXBxTFFacS9nUjNzVlMiLCJpYXQiOjE2MjM4MzkzOTJ9.NTlRtMRUoA-lDZiiiQDudxjOjibssTCDhNV92_EO5tQ' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"task 2"
}'

```

### Get List of Tasks

```bash
curl --location --request GET 'localhost:8080/list-tasks' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjM4NDI5OTIsImlkIjoxLCJlbWFpbCI6InVzZXIyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTzRKaERGUE1LcFk5a0RhR3lSQ0txdVlSd1Q3ZEhVQkhoYXRwTEVZbXBxTFFacS9nUjNzVlMiLCJpYXQiOjE2MjM4MzkzOTJ9.NTlRtMRUoA-lDZiiiQDudxjOjibssTCDhNV92_EO5tQ'

```