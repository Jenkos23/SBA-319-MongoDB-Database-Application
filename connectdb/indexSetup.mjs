import db from "./conn.mjs";


async function indexSetup() {
    try {
        
        const inspections = db.collection("inspections");
        

         // Create an index on 'certificate_number'
    await inspections.createIndex({ certificate_number: 1 });
    console.log("Created index on 'certificate_number'");


    // Compound index on 'certificate_number' and 'inspection_date'
    await inspections.createIndex({ certificate_number: 1, inspection_date: -1 });
    console.log("Created compound index on 'certificate_number' and 'inspection_date'");

    // Create an index on 'business_owner'
    await inspections.createIndex({ business_owner: 1 });
    console.log("Created index on 'business_owner'");

       // Create an index on 'business_owner'
       await inspections.createIndex({ inspection_date: 1 });
       console.log("Created index on 'inspection_date'");

  // Create an index on 'business_name'
  await inspections.createIndex({ business_name: 1 });
  console.log("Created index on 'business_name'");




    } catch (err) {
        
        console.error("Error setting up indexes:", err);
  }
    
}

// Export the index setup function
export default indexSetup;
