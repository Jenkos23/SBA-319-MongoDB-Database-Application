import express from 'express';
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";


const router = express.Router();



//Create a single inspections info
router.post("/", async (req, res) => {
    let collection = await db.collection("inspections");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
})

//Get a single inspections info details
router.get("/:id", async (req, res) =>{
    let collection = await db.collection("inspections");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if(!result) res.send("No found").status(404);
    else res.send(result).status(200)
})

//Add a business owner's name to the inspections entry
router.patch(":id/add", async (req, res) => {
    let collection = await db.collection("inspections");
    let query = {_id: new ObjectId(req.params.id)};

    let result = await collection.updateOne(query, {
        $push: { address: req.body}
    });

    if(!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})













export default router;