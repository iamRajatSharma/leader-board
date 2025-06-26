Here’s a basic README file based on the details you've provided for the API:

---

# API Documentation

## Base URL

```
http://localhost/api
```

## Available Endpoints

### 1. **POST** `/api/`

Add a new user with a name and score.

**Request:**

* **URL**: `http://localhost:3000/api/`
* **Method**: POST
* **Body (JSON)**:

  ```json
  {
    "name": "Random",
    "score": 120
  }
  ```

**Response:**

* **Success**:

  ```json
  {
    "message": "User created successfully",
    "status": "success",
    "data": {
      "name": "Random",
      "score": 120
    }
  }
  ```

* **Error**:

  ```json
  {
    "message": "Invalid input",
    "status": "error"
  }
  ```

### 2. **GET** `/api/top/{limit}`

Fetch the top N users based on score.

**Request:**

* **URL**: `http://localhost:3000/api/top/{limit}`

  * Replace `{limit}` with the number of top users you want to retrieve. E.g., `/api/top/5` to get the top 5 users.
* **Method**: GET

**Response:**

* **Success**:

  ```json
  {
    "message": "Top users fetched successfully",
    "status": "success",
    "data": [
      {
        "name": "Rajat Sharma",
        "score": 200
      },
      {
        "name": "John Doe",
        "score": 150
      }
      // More user objects
    ]
  }
  ```

* **Error**:

  ```json
  {
    "message": "No users found",
    "status": "error"
  }
  ```

### 3. **GET** `/api/name/{name}`

Fetch the details of a user by their name.

**Request:**

* **URL**: `http://localhost:3000/api/name/{name}`

  * Replace `{name}` with the user's name. E.g., `/api/name/Rajat Sharma`.
* **Method**: GET

**Response:**

* **Success**:

  ```json
  {
    "message": "User details fetched successfully",
    "status": "success",
    "data": {
      "name": "Rajat Sharma",
      "score": 120
    }
  }
  ```

* **Error**:

  ```json
  {
    "message": "User not found",
    "status": "error"
  }
  ```

### 4. **GET** `/api/score/{name}`

Fetch the score of a user by their name.

**Request:**

* **URL**: `http://localhost:3000/api/score/{name}`

  * Replace `{name}` with the user's name. E.g., `/api/score/Rajat Sharma`.
* **Method**: GET

**Response:**

* **Success**:

  ```json
  {
    "message": "User score fetched successfully",
    "status": "success",
    "data": {
      "name": "Rajat Sharma",
      "score": 120
    }
  }
  ```

* **Error**:

  ```json
  {
    "message": "User not found",
    "status": "error"
  }
  ```

## Error Handling

* **400 Bad Request**: When the request is invalid or required data is missing.
* **404 Not Found**: When the requested resource (e.g., user or top N users) is not found.
* **500 Internal Server Error**: When there is an unexpected error on the server side.

## Authentication

No authentication is required for these endpoints.

---

You can adjust any of the responses or details as necessary. Would you like me to add anything specific?
