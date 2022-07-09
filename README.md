# SocialMedia
Miro(Assessment)

Currently, the code has the following API routes already implemented:

- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login for an existing user
- POST `/api/post` - Create a new post
- GET `/api/post/:id` - Get a post
- PATCH `/api/post/:id` - Update a post
- DELETE `/api/post/:id` - Delete a post
- PUT `/api/post/:id/like` - Like / Dislike a post
- GET `/api/users/:id` - Got a user
- PUT `/api/users/:id` - Update a user
- DELETE `/api/users/:id` - Delete a user
- PUT `/api/users/:id/follow` - Follow a user
## Server

Create a `.env` file in the root directory, and copy the contents from [.env.sample](.env.sample)

### Setup

```
npm install
```
## Testing

You can use cURL or a tool like [Postman](https://www.postman.com/) to test the API.
You can view the test cases in the test file
