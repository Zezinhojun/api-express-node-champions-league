# Champions League API

## Description

The Champions League API provides endpoints to manage and retrieve information about players and clubs. The API is implemented using Node.js and Express, offering HTTP endpoints to interact with Champions League data.

## Data Structure

The API interacts with data represented in the following JSON format:

### Players Data

```json
[
    {
        "id": 1,
        "name": "Lionel Messi",
        "club": "Paris Saint-Germain",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 94,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 65
        }
    },
    {
        "id": 2,
        "name": "Neymar Junior",
        "club": "Paris Saint-Germain",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 92,
            "Pace": 86,
            "Shooting": 92,
            "Passing": 89,
            "Dribbling": 94,
            "Defending": 35,
            "Physical": 64
        }
    }
]
```

### Clubs Data

```json
[
    {
        "id": 1,
        "name": "Paris Saint Germain",
    },
    {
        "id": 2,
        "name": "Real Madrid",
    },
]
```

Each player object contains:
- `id`: Unique identifier for the player.
- `name`: Name of the player.
- `club`: Club to which the player belongs.
- `nationality`: Nationality of the player.
- `position`: Position of the player on the field.
- `statistics`: Player statistics including overall rating and individual attributes.

Each club object contains:
- `id`: Unique identifier for the club.
- `name`: Name of the club.

## Endpoints

### Players Endpoints

#### 1. Get Players

**Endpoint:** `/api/players`

**Method:** GET

**Description:** Returns a list of all players.

#### 2. Get Player by ID

**Endpoint:** `/api/players/:id`

**Method:** GET

**Description:** Returns details of a specific player based on the provided ID.

#### 3. Create Player

**Endpoint:** `/api/players`

**Method:** POST

**Description:** Creates a new player.

#### 4. Update Player

**Endpoint:** `/api/players/:id`

**Method:** PATCH

**Description:** Updates details of an existing player based on the provided ID.

#### 5. Delete Player

**Endpoint:** `/api/players/:id`

**Method:** DELETE

**Description:** Deletes a specific player based on the provided ID.

### Clubs Endpoints

#### 1. Get Clubs

**Endpoint:** `/api/clubs`

**Method:** GET

**Description:** Returns a list of all clubs.

## Technologies Used

- **[Node.js](https://nodejs.org/):** JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[Express](https://expressjs.com/):** Web framework for Node.js for building RESTful APIs.
- **[Cors](https://www.npmjs.com/package/cors):** Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.
- **[TypeScript](https://www.typescriptlang.org/):** Superset of JavaScript that adds static typing and other features.
- **[Tsup](https://tsup.egoist.dev/):** Build tool for compiling TypeScript code to JavaScript.
- **[TSX](https://tsx.dev/):** Tool for running and developing TypeScript projects.
- **[@types/express](https://www.npmjs.com/package/@types/express):** TypeScript type definitions for Express.
- **[@types/cors](https://www.npmjs.com/package/@types/cors):** TypeScript type definitions for CORS.

## Running the Project

1. **Install Dependencies**

   Run the following command to install project dependencies:

   ```bash
   npm install
   ```

2. **Start the Server**

   Run the following command to start the server in development mode:

   ```bash
   npm run start:dev
   ```

3. **Test the API**

   Use tools like Postman or cURL to test the API endpoints:

   - List players: `GET http://localhost:3000/api/players`
   - Get a specific player: `GET http://localhost:3000/api/players/:id`
   - Create a new player: `POST http://localhost:3000/api/players`
   - Update a player: `PATCH http://localhost:3000/api/players/:id`
   - Delete a player: `DELETE http://localhost:3000/api/players/:id`
   - List clubs: `GET http://localhost:3000/api/clubs`

## Contributing

Feel free to open issues or submit pull requests to contribute improvements to this project.

## License

This project is licensed under the [MIT License](LICENSE).
