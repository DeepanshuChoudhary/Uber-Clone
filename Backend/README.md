# User Registration API

## Endpoint  
`POST /users/register`

This endpoint is used to create a new user account.  
It validates the input, hashes the password, stores the user in the database, and returns an authentication token.

---

## Request Body

The API expects JSON data in the following format:

```json
{
  "fullName": {
    "firstName": "Deepanshu",
    "lastName": "Choudhary"
  },
  "email": "test@test.com",
  "password": "test123"
}

---

## Example Response

{
  "token": "eyJhbGciOiJIUzI1NiIs6IkpXVCJ9...",
  "user": {
    "_id": "65bfa6e6d99f31e1c2a88c43",
    "fullName": {
      "firstName": "Deepanshu",
      "lastName": "Choudhary"
    },
    "email": "test@test.com"
  }
}



## User Login API

## Endpoint  
`POST /users/login`

This endpoint is used to authenticate an existing user.  
It checks the email and password, and if valid, returns a JWT token along with the user data.

---

## Request Body

The API expects JSON data in the following format:

```json
{
  "email": "test@test.com",
  "password": "test123"
}


## User Profile API

### Endpoint  
GET /users/profile

This endpoint returns the currently logged-in user’s profile.  
It is a protected route, so a valid JWT token is required.

The token is verified by `authMiddleware`.  
If valid, the user data is attached to `req.user` and returned.

---

### Authentication Required

Send the token in either of these ways:

Cookie:
token=<JWT_TOKEN>

OR

Header:
Authorization: Bearer <JWT_TOKEN>

---

### Example Request

GET /users/profile  
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

---

### Example Response

```json
{
  "_id": "65bfa6e6d99f31e1c2a88c43",
  "fullName": {
    "firstName": "Deepanshu",
    "lastName": "Choudhary"
  },
  "email": "test@test.com",
  "socketId": null
}


# Captain Registration API

## Endpoint  
POST /captains/register

This endpoint is used to register a new captain (driver) in the system.  
A captain is a driver who owns a vehicle and can later accept ride requests.

It validates input, hashes the password, stores the captain in the database, and returns a JWT token.

---

## Request Body

The API expects JSON data in the following format:

```json
{
  "fullName": {
    "firstName": "Rahul",
    "lastName": "Verma"
  },
  "email": "test@test.com",
  "password": "test123",
  "vehicle": {
    "color": "Black",
    "plate": "DL01AB1234",
    "capacity": 4,
    "vehicleType": "Car"
  }
}

### Example Response

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "65c1bfae12a3a9d45f0c22ab",
    "fullName": {
      "firstName": "Rahul",
      "lastName": "Verma"
    },
    "email": "test@test.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "DL01AB1234",
      "capacity": 4,
      "vehicleType": "Car"
    }
  }
}


# Captain Registration API

## Endpoint  
POST /captains/register

Registers a new captain (driver) with vehicle details.

---

## Request Body

```json
{
  "fullName": {
    "firstName": "Rahul",
    "lastName": "Verma"
  },
  "email": "rahul@test.com",
  "password": "test123",
  "vehicle": {
    "color": "Black",
    "plate": "DL01AB1234",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

---

## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "65c1bfae12a3a9d45f0c22ab",
    "fullName": {
      "firstName": "Rahul",
      "lastName": "Verma"
    },
    "email": "rahul@test.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "DL01AB1234",
      "capacity": 4,
      "vehicleType": "Car"
    }
  }
}
```

---

# Captain Login API

## Endpoint  
POST /captains/login

Authenticates captain and returns JWT.

---

## Request Body

```json
{
  "email": "rahul@test.com",
  "password": "test123"
}
```

---

## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "65c1bfae12a3a9d45f0c22ab",
    "email": "rahul@test.com"
  }
}
```

---

# Captain Profile API

## Endpoint  
GET /captains/profile

Returns logged-in captain profile.  
Protected route.

---

## Example Response

```json
{
  "_id": "65c1bfae12a3a9d45f0c22ab",
  "fullName": {
    "firstName": "Rahul",
    "lastName": "Verma"
  },
  "email": "rahul@test.com",
  "status": "inactive",
  "vehicle": {
    "color": "Black",
    "plate": "DL01AB1234",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

---

# Captain Logout API

## Endpoint  
GET /captains/logout

Logs out captain and invalidates token.

---

## Example Response

```json
{
  "message": "Logged out captain"
}