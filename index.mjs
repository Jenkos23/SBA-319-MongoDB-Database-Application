import express from 'express';
import dotenv from 'dotenv';
import indexSetup from './connectdb/indexSetup.mjs'
import inspections from "./routes/inspections.mjs";
import posts from  "./routes/posts.mjs";
import grades from "./routes/grades.mjs";
dotenv.config();


const PORT = 3000;
const app = express();

//Route Usuage:
app.use(express.json());
app.use('/grades', grades);
app.use('/inspect', inspections);
app.use('/posts', posts);


//To check if my route is functionally
app.get("/", (req, res) => {
    res.send("Welcome to the API.");
  });

  //Initiliase the index function
 await indexSetup();

  


  // Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
});
