# LineIQ

LineIQ is a hockey analytics application that allows users to build and customize their own lineups, then predict how effectively those players would perform together.

## Tech Stack

* Java 21
* Spring Boot
* Maven
* React
* Vite
* Bulma
* NHL API

## Current Features

* Search for an NHL player using their player ID
* Retrieve player information through a Spring Boot REST API
* Display multiple selected players
* Simple React frontend styled with Bulma

## Project Structure

```text
LineIQ/
├── src/
│   └── main/
│       └── java/
│           └── com.example.LineIQ/
│               ├── client/
│               ├── controller/
│               ├── model/
│               └── service/
│
└── frontend/
    └── React/Vite application
```

## Running the Application

### Backend

From the project root:

```bash
./mvnw spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### Frontend

From the `frontend` directory:

```bash
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## API

Get a player by NHL player ID:

```text
GET /player/{id}
```

Example:

```text
GET /player/8479318
```
