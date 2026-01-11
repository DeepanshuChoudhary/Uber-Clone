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
