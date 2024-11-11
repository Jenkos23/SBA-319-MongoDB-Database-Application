import express from 'express';
import db from "../connectdb/conn.mjs";
import { ObjectId } from "mongodb";


const router = express.Router();



//Create a route to populate my 20 sample inspections collections info using ReqBin
router.post("/", async (req, res) => {
    let collection = await db.collection("inspections");
    let newDocument = req.body;
    let result = await collection.insertMany(newDocument);
    res.send(result).status(204);
});



//Get all inspections info details
router.get("/allCert", async (req, res) =>{
    let collection = await db.collection("inspections");
    // let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.find().skip(10).limit(20).toArray();

    if(!result) res.send("inspections details not found").status(404);
    else res.send(result).status(200)
});


// Get ID and the business name from inspections
router.get("/allCertId", async (req, res) => {
    let collection = await db.collection("inspections");
    let result = await collection.find({ business_name: { $ne: "" }}, { projection: { business_name: 1 } })
    .sort({business_name: 1})
    .skip(20)
    .limit(50).toArray();

    if (!result || result.length === 0) {
        return res.status(404).send("Inspection details not found");
    } else {
       
        return res.status(200).send(result);
    }
});


// Get just business names from inspections
router.get("/allCertBus", async (req, res) => {
    let collection = await db.collection("inspections");
    let result = await collection.find({ business_name: { $ne: "" }}, { projection: { business_name: 1 } })
    .sort({business_name: 1})
    .skip(20)
    .limit(150).toArray();

    if (!result || result.length === 0) {
        return res.status(404).send("Inspection details not found");
    } else {
        // Map through the result to return only the business names
        let businessNames = result.map(doc => doc.business_name);
        return res.status(200).send(businessNames);
    }
});



//Get a single inspections info details
router.get("/:id", async (req, res) =>{
    let collection = await db.collection("inspections");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query, {
        projection: { business_name: 1 }
    });

    if(!result) res.send("inspections details not found").status(404);
    else res.send(result).status(200)
})

//Add a business owner's name to the inspections entry
router.patch("/:id/add", async (req, res) => {
    let collection = await db.collection("inspections");
    let query = {_id: new ObjectId(req.params.id)};

    let result = await collection.updateOne(query, {
        $set: { business_owner: req.body.business_owner}
    });

  // Check if the document was found and updated
    if(!result.matchedCount === 0) res.send("Inspection details not found").status(404);
    if(!result.modifiedCount === 0) res.send("Business owner name is already up-to-date")

        //Respond with Success
    else res.send(result).status(200);

})
// Delete a single grade entry
router.delete("/:id", async (req, res) => {
    let collection = await db.collection("inspections");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.deleteOne(query);
  
    if (!result) res.send(" Inspection details not found").status(404);
    else res.send(result).status(200);
  });


  //Get inspection certificate details
  router.get("/certificate/:id", async (req, res) => {
    let collection = await db.collection("inspections");
    let query = { certificate_number: Number(req.params.id) };

    let result = await collection.find(query).toArray();

    if (!result || result.length === 0) {
        return res.status(404).send("Certificate not found");
    }
    return res.status(200).send(result);
});


// //Update a certificate number
router.patch("/certificate/:id", async (req, res) => {
    let collection = db.collection("inspections");
    let query = {certificate_number: Number (req.params.id)};

    let result = await collection.updateOne(query, {
        $set: {certificate_number: req.body.certificate_number}
    });
    if (!result.modifiedCount) {
        return res.status(404).send("Certificate not found or already up to date");
    }
    return res.status(200).send(result);
});

// // Delete a certificate info
router.delete("/certificate/:id", async (req, res) => {
    let collection = await db.collection("inspections");
    let query = { class_id: Number(req.params.id) };
  
    let result = await collection.deleteOne(query);
  
   
    if (!result.deletedCount) {
        return res.status(404).send("Certificate not found");
    }
    return res.status(200).send(result);
});








export default router;