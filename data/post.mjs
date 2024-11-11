
// Populating my application post collection with 20 sample data

// Note: The following data entries were not actually used in the application.
// Instead, they serve as sample data that I populated into my post collection 
// for testing and reference purposes using the REQBIN tool.
// These entries are designed to provide a diverse set 
// of examples that emulate real-world data, ensuring that the application 
// can handle different scenarios when interacting with the MongoDB database. 
// This data can help in testing functionality, validating responses, 
// and performing quality assurance checks in my code.

  posts = [
    {
      "body": "The Constitution establishes the framework for the government of the United States.",
      "permalink": "USConst01",
      "author": "machine",
      "title": "US Constitution Overview",
      "tags": ["government", "law", "constitution"],
      "comments": [{
          "body": "Great summary! Very informative.",
          "email": "commenter1@example.com",
          "author": "Alice"
        },
        {
          "body": "I learned a lot from this article.",
          "email": "commenter2@example.com",
          "author": "Bob"
        }
      ],
      "date": "2022-01-01T12:00:00Z"
    },
    {
      "body": "Article I discusses the Legislative Branch of the government.",
      "permalink": "USConst02",
      "author": "machine",
      "title": "Article I Explained",
      "tags": ["legislature", "article1", "government"],
      "comments": [{
          "body": "Interesting take on legislative powers.",
          "email": "commenter3@example.com",
          "author": "Charlie"
        }
      ],
      "date": "2022-01-02T12:00:00Z"
    },
    {
      "body": "Article II covers the Executive Branch and the powers of the President.",
      "permalink": "USConst03",
      "author": "machine",
      "title": "Understanding Article II",
      "tags": ["executive", "president", "powers"],
      "comments": [{
          "body": "This is important information for citizens.",
          "email": "commenter4@example.com",
          "author": "Diane"
        }
      ],
      "date": "2022-01-03T12:00:00Z"
    },
    {
      "body": "The Bill of Rights enumerates specific rights for individuals.",
      "permalink": "USConst04",
      "author": "machine",
      "title": "Bill of Rights",
      "tags": ["rights", "freedom", "law"],
      "comments": [{
          "body": "The Bill of Rights is essential to our democracy.",
          "email": "commenter5@example.com",
          "author": "Eddie"
        }
      ],
      "date": "2022-01-04T12:00:00Z"
    },
    {
      "body": "Checks and balances are crucial to prevent any one branch from becoming too powerful.",
      "permalink": "USConst05",
      "author": "machine",
      "title": "Checks and Balances",
      "tags": ["checks", "balances", "government"],
      "comments": [{
          "body": "I appreciate the clarification on this topic.",
          "email": "commenter6@example.com",
          "author": "Fiona"
        }
      ],
      "date": "2022-01-05T12:00:00Z"
    },
    {
      "body": "Amendments can be proposed and ratified to adapt the Constitution over time.",
      "permalink": "USConst06",
      "author": "machine",
      "title": "Amendment Process",
      "tags": ["amendments", "law", "constitution"],
      "comments": [{
          "body": "The amendment process speaks to our evolving society.",
          "email": "commenter7@example.com",
          "author": "George"
        }
      ],
      "date": "2022-01-06T12:00:00Z"
    },
    {
      "body": "The Constitution is the supreme law of the land.",
      "permalink": "USConst07",
      "author": "machine",
      "title": "Supremacy Clause",
      "tags": ["supremacy", "law", "constitution"],
      "comments": [{
          "body": "The Constitution really does hold everything together.",
          "email": "commenter8@example.com",
          "author": "Hannah"
        }
      ],
      "date": "2022-01-07T12:00:00Z"
    },
    {
      "body": "Equal protection under the law is guaranteed.",
      "permalink": "USConst08",
      "author": "machine",
      "title": "Equal Protection",
      "tags": ["equality", "law", "rights"],
      "comments": [{
          "body": "We must always fight for equal protection.",
          "email": "commenter9@example.com",
          "author": "Ian"
        }
      ],
      "date": "2022-01-08T12:00:00Z"
    },
    {
      "body": "The Constitution has evolved through interpretations by the Supreme Court.",
      "permalink": "USConst09",
      "author": "machine",
      "title": "Supreme Court Interpretations",
      "tags": ["supreme court", "law", "interpretation"],
      "comments": [{
          "body": "Supreme Court rulings have shaped our society.",
          "email": "commenter10@example.com",
          "author": "Jane"
        }
      ],
      "date": "2022-01-09T12:00:00Z"
    },
    {
      "body": "Voting rights have expanded through various amendments.",
      "permalink": "USConst10",
      "author": "machine",
      "title": "Voting Rights Expansion",
      "tags": ["voting", "rights", "amendments"],
      "comments": [{
          "body": "It's important to protect our voting rights.",
          "email": "commenter11@example.com",
          "author": "Kevin"
        }
      ],
      "date": "2022-01-10T12:00:00Z"
    },
    {
      "body": "The Constitution outlines the responsibilities of citizenship.",
      "permalink": "USConst11",
      "author": "machine",
      "title": "Responsibilities of Citizenship",
      "tags": ["citizenship", "responsibility"],
      "comments": [{
          "body": "Being an informed citizen is crucial.",
          "email": "commenter12@example.com",
          "author": "Liam"
        }
      ],
      "date": "2022-01-11T12:00:00Z"
    },
    {
      "body": "Federalism divides power between national and state governments.",
      "permalink": "USConst12",
      "author": "machine",
      "title": "Federalism Explained",
      "tags": ["federalism", "government"],
      "comments": [],
      "date": "2022-01-12T12:00:00Z"
    },
    {
      "body": "The principle of separation of powers prevents any one branch from dominating.",
      "permalink": "USConst13",
      "author": "machine",
      "title": "Separation of Powers",
      "tags": ["separation", "powers", "government"],
      "comments": [{
          "body": "Separation of powers is really vital in our government.",
          "email": "commenter13@example.com",
          "author": "Mia"
        }
      ],
      "date": "2022-01-13T12:00:00Z"
    },
    {
      "body": "The Constitution protects individual freedoms and liberties.",
      "permalink": "USConst14",
      "author": "machine",
      "title": "Individual Freedoms",
      "tags": ["freedoms", "rights"],
      "comments": [{
          "body": "Our freedoms should never be taken for granted.",
          "email": "commenter14@example.com",
          "author": "Noah"
        }]
      ,
      "date": "2022-01-14T12:00:00Z"
    },
    {
      "body": "Civil rights movement highlighted the struggle for equality.",
      "permalink": "USConst15",
      "author": "machine",
      "title": "Civil Rights Movement",
      "tags": ["civil rights", "equality"],
      "comments": [{
          "body": "There’s still so much work to be done.",
          "email": "commenter15@example.com",
          "author": "Olivia"
        }
      ],
      "date": "2022-01-15T12:00:00Z"
    },
    {
      "body": "Landmark Supreme Court cases have defined our rights.",
      "permalink": "USConst16",
      "author": "machine",
      "title": "Landmark Cases",
      "tags": ["supreme court", "landmark cases"],
      "comments": [{
          "body": "We should study these cases thoroughly.",
          "email": "commenter16@example.com",
          "author": "Paul"
        }
      ],
      "date": "2022-01-16T12:00:00Z"
    },
    {
      "body": "Constitutional law is essential for justice in society.",
      "permalink": "USConst17",
      "author": "machine",
      "title": "Constitutional Law",
      "tags": ["law", "justice"],
      "comments": [{
          "body": "Law shapes our collective future.",
          "email": "commenter17@example.com",
          "author": "Quinn"
        }
      ],
      "date": "2022-01-17T12:00:00Z"
    },
    {
      "body": "Civil liberties are essential for maintaining democracy.",
      "permalink": "USConst18",
      "author": "machine",
      "title": "Civil Liberties",
      "tags": ["liberties", "democracy"],
      "comments": [{
          "body": "We must always defend our civil liberties.",
          "email": "commenter18@example.com",
          "author": "Riley"
        }
      ],
      "date": "2022-01-18T12:00:00Z"
    },
    {
      "body": "Understanding the Constitution helps us be informed citizens.",
      "permalink": "USConst19",
      "author": "machine",
      "title": "Importance of Understanding Constitution",
      "tags": ["understanding", "education"],
      "comments": [{
          "body": "Educational resources are vital for democracy.",
          "email": "commenter19@example.com",
          "author": "Samantha"
        }
      ],
      "date": "2022-01-19T12:00:00Z"
    },
    {
      "body": "The Constitution provides a framework for continuous improvement in society.",
      "permalink": "USConst20",
      "author": "machine",
      "title": "Continuous Improvement under the Constitution",
      "tags": ["improvement", "society"],
      "comments": [{
          "body": "Together, we can ensure our rights are protected.",
          "email": "commenter20@example.com",
          "author": "Tyler"
        }
      ],
      "date": "2022-01-20T12:00:00Z"
    }
  ]