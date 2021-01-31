const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const trailSeed = [
  {
    image: "https://cdn-assets.alltrails.com/uploads/photo/image/22011982/extra_large_706ba1a5f39608dbe66b5df07ce4112f.jpg",
    name: "Yarra Bend Park Loop",
    location:"Yarra Bend Park",
    address: "Yarra Bend Rd, Fairfield VIC 3078",
    intro: "Yarra Bend Park Loop is a 9.5 kilometer heavily trafficked loop trail located near Melbourne, Victoria, Australia that features a river and is rated as moderate. The trail is primarily used for hiking, walking, running, and nature trips and is accessible year-round.",
    discription: "As of March 26, 2020, users have reported that parts of this trail have been closed due to flooding, however can cross with scrambling. Please consult the park's website before visiting.If you're looking to escape the hustle and bustle of the city, this is your place. You can fully immerse into nature here, and check out some wildlife. There are some bat viewing areas. The trail at some points can be uneven and muddy, so please come prepared.",
    difficulty: "moderate",
    length: 9.5,
    elevation: 127,
    route: "Loop"
  },
];

db.Trail.remove({})
  .then(() => db.Trail.collection.insertMany(trailSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
