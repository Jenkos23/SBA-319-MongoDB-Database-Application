
// ===============================================================
// Populating My Application's inspection Collection with Sample Data
// ===============================================================
// This sample data is already populated into mangoDB
// collection in MongoDB with 20 sample data entries. The
// documents serve to illustrate the use case of the post collection 
// and ensure that there is a sufficient amount of data for testise sample
// and demonstration purposes. 

// Note: The data presented here has not been used in actual operations; 
// it is purely sample data that I populated into my post collection 
// using REQBIN for testing and reference. Each document is structured 
// according to the expected schema of the post collection, and it includes 
// fields such as 'id', 'certificate_number', 'business_name', 'date', 
// 'result', 'sector', 'address', and 'business_owner'.

// To meet the requirements of this application, it must be ensured 
// that the collections are populated with sample data illustrating
// various use cases. This entails including at least five sample 
// documents per collection. Therefore, it is advisable to 
// populate collections with a substantial number of sample 
// documents, ideally between 10 to 20, to avoid falling short 
// of the requirements—especially considering that testing delete 
// routes may unintentionally reduce the number of documents 
// available for testing.

// Before submitting your project, double-check this requirement 
// to ensure that the collections are adequately populated with 
// sample data. This will facilitate a smoother testing process 
// and provide a more comprehensive representation of the 
// underlying database schema and functionality.
// ===============================================================

inspectionData: [
    {
      "id": "10101-2016-ENFO",
      "certificate_number": 3019416,
      "business_name": "GREEN THUMB GARDEN CENTER",
      "date": "Mar 15 2016",
      "result": "Pass",
      "sector": "Retail - 130",
      "address": {
        "city": "GARDEN CITY",
        "zip": 11530,
        "street": "NASSAU BLVD",
        "number": 34
      },
      "business_owner": "Jane Doe"
    },
    {
      "id": "10202-2017-ENFO",
      "certificate_number": 3019417,
      "business_name": "HEALTHY Bites CAFÉ",
      "date": "Jul 10 2017",
      "result": "Fail",
      "sector": "Food and Beverage - 452",
      "address": {
        "city": "EAST MEADOW",
        "zip": 11554,
        "street": "OLD COUNTRY RD",
        "number": 12
      },
      "business_owner": "John Smith"
    },
    {
      "id": "10303-2018-ENFO",
      "certificate_number": 3019418,
      "business_name": "RIVERFRONT FITNESS",
      "date": "Jan 25 2018",
      "result": "Pass",
      "sector": "Health & Fitness - 657",
      "address": {
        "city": "MASSAPEQUA",
        "zip": 11758,
        "street": "SUNRISE HWY",
        "number": 2020
      },
      "business_owner": "Mary Johnson"
    },
    {
      "id": "10404-2019-ENFO",
      "certificate_number": 3019419,
      "business_name": "BOOKWORM LIBRARY SERVICES",
      "date": "Sep 05 2019",
      "result": "Pass",
      "sector": "Public Services - 763",
      "address": {
        "city": "OLD BETHPAGE",
        "zip": 11804,
        "street": "PLAINVIEW ROAD",
        "number": 815
      },
      "business_owner": "Sam Lee"
    },
    {
      "id": "10505-2020-ENFO",
      "certificate_number": 3019420,
      "business_name": "OCEAN VIEW RESTAURANT",
      "date": "Dec 20 2020",
      "result": "Fail",
      "sector": "Food and Beverage - 452",
      "address": {
        "city": "LONG BEACH",
        "zip": 11561,
        "street": "OCEAN BLVD",
        "number": 123
      },
      "business_owner": "Lisa Wang"
    },
    {
      "id": "10606-2021-ENFO",
      "certificate_number": 3019421,
      "business_name": "ARTISTIC FLOWERS",
      "date": "Apr 12 2021",
      "result": "Pass",
      "sector": "Retail - 130",
      "address": {
        "city": "COPIAGUE",
        "zip": 11726,
        "street": "WANTAGH AVE",
        "number": 706
      },
      "business_owner": "Alex Brown"
    },
    {
      "id": "10707-2022-ENFO",
      "certificate_number": 3019422,
      "business_name": "TECHNOVATION SOLUTIONS",
      "date": "Oct 30 2022",
      "result": "Pass",
      "sector": "Technology - 554",
      "address": {
        "city": "BETHPAGE",
        "zip": 11714,
        "street": "MAIN ST",
        "number": 88
      },
      "business_owner": "Michael Green"
    },
    {
      "id": "10808-2023-ENFO",
      "certificate_number": 3019423,
      "business_name": "FITNESS FIRST",
      "date": "Jun 18 2023",
      "result": "Pass",
      "sector": "Health & Fitness - 657",
      "address": {
        "city": "HICKSVILLE",
        "zip": 11801,
        "street": "JERUSALEM AVE",
        "number": 420
      },
      "business_owner": "Katie White"
    },
    {
      "id": "10909-2024-ENFO",
      "certificate_number": 3019424,
      "business_name": "HAPPY PAWS PET SERVICES",
      "date": "Aug 01 2024",
      "result": "Fail",
      "sector": "Pet Services - 987",
      "address": {
        "city": "AMITYVILLE",
        "zip": 11701,
        "street": "BROADWAY",
        "number": 432
      },
      "business_owner": "Rachel Adams"
    },
    {
      "id": "11010-2025-ENFO",
      "certificate_number": 3019425,
      "business_name": "CLEAN EARTH ENVIRONMENTAL",
      "date": "Mar 03 2025",
      "result": "Pass",
      "sector": "Environmental Services - 762",
      "address": {
        "city": "ISLIP",
        "zip": 11751,
        "street": "SOUTH MAIN ST",
        "number": 300
      },
      "business_owner": "Daniel Carter"
    },
    {
      "id": "11111-2026-ENFO",
      "certificate_number": 3019426,
      "business_name": "SWEET TREATS BAKERY",
      "date": "May 29 2026",
      "result": "Pass",
      "sector": "Food and Beverage - 452",
      "address": {
        "city": "NORTH BABYLON",
        "zip": 11703,
        "street": "GRAND BLVD",
        "number": 504
      },
      "business_owner": "Sara Taylor"
    },
    {
      "id": "11212-2027-ENFO",
      "certificate_number": 3019427,
      "business_name": "THE ART STUDIO",
      "date": "Jul 08 2027",
      "result": "Fail",
      "sector": "Art - 788",
      "address": {
        "city": "BAY SHORE",
        "zip": 11706,
        "street": "SOUTHERN MAIN ST",
        "number": 777
      },
      "business_owner": "Megan Hall"
    },
    {
      "id": "11313-2028-ENFO",
      "certificate_number": 3019428,
      "business_name": "CROSSROADS TRAVEL AGENCY",
      "date": "Feb 10 2028",
      "result": "Pass",
      "sector": "Travel - 781",
      "address": {
        "city": "BELLPORT",
        "zip": 11713,
        "street": "FURMAN RD",
        "number": 88
      },
      "business_owner": "Ethan King"
    },
    {
      "id": "11414-2029-ENFO",
      "certificate_number": 3019429,
      "business_name": "FAMILY PHARMACY",
      "date": "Oct 21 2029",
      "result": "Pass",
      "sector": "Pharmacy - 412",
      "address": {
        "city": "SHIRLEY",
        "zip": 11967,
        "street": "SIXTH AVE",
        "number": 250
      },
      "business_owner": "Zoe Martinez"
    },
    {
      "id": "11515-2030-ENFO",
      "certificate_number": 3019430,
      "business_name": "COZY COTTAGE GIFT SHOP",
      "date": "Apr 12 2030",
      "result": "Fail",
      "sector": "Retail - 130",
      "address": {
        "city": "PATCHOGUE",
        "zip": 11772,
        "street": "WAVE AVE",
        "number": 900
      },
      "business_owner": "George Wilson"
    },
    {
      "id": "11616-2031-ENFO",
      "certificate_number": 3019431,
      "business_name": "MIND & BODY SPA",
      "date": "Dec 17 2031",
      "result": "Pass",
      "sector": "Health & Wellness - 611",
      "address": {
        "city": "FARMINGDALE",
        "zip": 11735,
        "street": "MAIN ST",
        "number": 456
      },
      "business_owner": "Julia Evans"
    },
    {
      "id": "11717-2032-ENFO",
      "certificate_number": 3019432,
      "business_name": "NORTHERN LIGHTS TATTOO",
      "date": "Jan 08 2032",
      "result": "Pass",
      "sector": "Personal Services - 599",
      "address": {
        "city": "BAYVILLE",
        "zip": 11709,
        "street": "HARBOR RD",
        "number": 23
      },
      "business_owner": "Oscar Young"
    },
    {
      "id": "11818-2033-ENFO",
      "certificate_number": 3019433,
      "business_name": "SUSTAINABLE LIVING CO.",
      "date": "Mar 05 2033",
      "result": "Pass",
      "sector": "Sustainability - 867",
      "address": {
        "city": "HUNTINGTON",
        "zip": 11743,
        "street": "GOVERNORS ST",
        "number": 555
      },
      "business_owner": "Karen Wright"
    },
    {
      "id": "11919-2034-ENFO",
      "certificate_number": 3019434,
      "business_name": "GADGETS GALORE",
      "date": "Nov 18 2034",
      "result": "Fail",
      "sector": "Retail - 130",
      "address": {
        "city": "MERRICK",
        "zip": 11566,
        "street": "BELLMORE AVE",
        "number": 333
      },
      "business_owner": "Brian Hart"
    }
  ]