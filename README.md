# Mango Database Application README

## Overview

This application interacts with a MongoDB database, fetching and manipulating data related to grades, inspections, and posts. It connects to a sample training collection, performing various operations such as data retrieval, insertion, and updates. The structure of the app is organized into multiple folders, each serving a specific purpose in the project.

## Project Structure

The application is organized into the following directories and files:

1. **`connecteddb/`**  
   Contains two important files related to database connection and setup:
   - **`conn.mjs`**: Establishes the connection to the MongoDB database using environment variables for sensitive details.
   - **`indexSetup.mjs`**: Sets up the indexing structure to ensure high-performance data retrieval.

2. **`routes/`**  
   Contains the route files responsible for interacting with different parts of the database:
   - **`grades.mjs`**: Manages the routes related to grade data.
   - **`inspections.mjs`**: Handles routes related to inspection data.
   - **`posts.mjs`**: Deals with client-related post data.

3. **`data/`**  
   This directory is not utilized in the application, but contains a reference for the 20 sample data uploaded to MongoDB.

4. **`package.json`**  
   Lists the dependencies and scripts required for the application.

5. **`.env`**  
   Contains environment variables, specifically the MongoDB connection string, used for connecting to the database.

6. **`index.mjs`**  
   The main entry point of the application, where routes and setup functions are initialized.

## Key Features

### Database Connection
- The **`conn.mjs`** file handles the database connection, pulling sensitive details like the connection string from the `.env` file. This allows the app to securely connect to MongoDB.

### Index Setup
- The **`indexSetup.mjs`** file configures indexing structures on MongoDB collections to ensure efficient querying, especially for large datasets. This is critical for optimizing performance when fetching data from the database.

### Routes

#### 1. **Grades Routes (`grades.mjs`)**
   - **`GET /grades/gradeData`**: Fetches all grade data, skipping the first 10 entries and limiting the results to 20 items.  
     - Example URL: `localhost:3000/grades/gradeData`
   - **`POST /grades/gradeData`**: Adds 20 sample grade entries to the database (already uploaded).

   Additional CRUD operations for grades are available and can be reviewed in the `grades.mjs` file.

#### 2. **Inspections Routes (`inspections.mjs`)**
   - **`GET /inspects/allCert`**: Fetches all inspection data.  
     - Example URL: `localhost:3000/inspects/allCert`
   - **`POST /inspects/sample`**: Populates the database with 20 sample inspection entries using a tool like Reqbin.

#### 3. **Posts Routes (`posts.mjs`)**
   - **`GET /posts/`**: Fetches all posts.
   - **`GET /posts/:id`**: Fetches a specific post by its ID.
   - **`GET /posts/:id/details`**: Fetches a specific post by its ID along with the title, tags, and author name.
   - **`PATCH /posts/:id`**: Updates an existing post.
   - **`POST /posts/`**: Creates a new post.
   - **`DELETE /posts/:id`**: Deletes a post by its ID.

### .env Configuration
The .env file contains the MongoDB connection string which is a sensitive information needed to establish a connection to the database. It has been committed to the project for development purposes, but  the password was not uploaded so make sure to replace it with your own credentials.

### `index.mjs`
- This is the main entry point where the routes are imported and utilized. It also handles the initial setup of the indexing structure for performance optimization via the `indexSetup` function.

### Data Population
- The application includes routes to populate MongoDB collections with 20 sample data entries for grades, inspections, and posts. These samples are inserted using tools like Reqbin for the inspections data and direct POST requests for grades and posts.

## Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://your-repository-url.git
   cd your-repository-folder
   ```

2. **Install dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Set up your environment variables**:
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string in the following format:
     ```
     DB_CONNECTION_STRING=mongodb://your-username:your-password@your-cluster.mongodb.net/your-database-name
     ```

4. **Run the application**:
   Start the application with:
   ```bash
   npm start
   ```

5. **Test the Routes**:
   - To test the routes, you can use a tool like Postman or directly visit the URLs in your browser:
     - `localhost:3000/grades/gradeData`
     - `localhost:3000/inspects/allCert`
     - `localhost:3000/posts/`

## Conclusion

This application serves as a simple but functional interface to interact with MongoDB collections, with features to fetch, post, and manipulate data for grades, inspections, and posts. It utilizes indexing for performance optimization, secure database connections through environment variables, and provides an easy-to-use API for interacting with the data.


