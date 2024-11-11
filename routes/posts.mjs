import express from 'express';
import db from "../connectdb/conn.mjs";
import { ObjectId } from "mongodb";



const router = express.Router();

//Create a route to populate my 20 sample  post collections info using ReqBin
router.post("/", async (req,res) => {
  let collection = await db.collection("posts");
  let newDocument = req.body;
  let result = await collection.insertMany(newDocument);
  res.send(result).status(404);
    
});

//Get all post details 
router.get("/allPosts", async (req, res) => {
    let collection = await db.collection("posts");
    let result = await collection.find().limit(5).toArray();

    if(!result) res.send("post not found").status(404);
        else res.send(result).status(200)
    
});

// Get ID and the title
router.get("/allPostAuthor", async (req, res) => {
    let collection = await db.collection("posts");
    let result = await collection.find({}, { projection: { title: 1} })
    .skip(100)
    .limit(50).toArray();

    if (!result || result.length === 0) {
        return res.status(404).send("Title details not found");
    } else {
       
        return res.status(200).send(result);
    }
});

// Get ID and the author, title and tags
router.get("/allPostId", async (req, res) => {
    let collection = await db.collection("posts");
    let result = await collection.find({}, { projection: { author: 1, title: 1, tags: 1} })
    .skip(20)
    .limit(50).toArray();

    if (!result || result.length === 0) {
        return res.status(404).send("IPosts details not found");
    } else {
       
        return res.status(200).send(result);
    }
});


//Get a single post info details
router.get("/:id", async (req, res) =>{
    let collection = await db.collection("posts");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query)


    if(!result) res.send("Posts details not found").status(404);
    else res.send(result).status(200)
});

//Add comment to the post entry
router.patch("/:id/add", async (req, res) => {
    let collection = await db.collection("posts");
    let query = {_id: new ObjectId(req.params.id)};

    let result = await collection.updateOne(query, {
        $set: { comments: req.body.comments}
    });

  // Check if the document was found and updated
    if(!result.matchedCount === 0) res.send("Post details not found").status(404);
    if(!result.modifiedCount === 0) res.send("comments is already up-to-date")

        //Respond with Success
    else res.send(result).status(200);

})
// Delete a single grade entry
router.delete("/:id", async (req, res) => {
    let collection = await db.collection("posts");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.deleteOne(query);
  
    if (!result) res.send(" Inspection details not found").status(404);
    else res.send(result).status(200);
  });









export default router;