const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const trailSeed = [
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/22011982/extra_large_706ba1a5f39608dbe66b5df07ce4112f.jpg",
        name: "Yarra Bend Park Loop",
        location: "Yarra Bend Park",
        address: "Yarra Bend Rd, Fairfield VIC 3078",
        intro: "Yarra Bend Park Loop is a 9.5 kilometer heavily trafficked loop trail located near Melbourne, Victoria, Australia that features a river and is rated as moderate. The trail is primarily used for hiking, walking, running, and nature trips and is accessible year-round.",
        discription: "As of March 26, 2020, users have reported that parts of this trail have been closed due to flooding, however can cross with scrambling. Please consult the park's website before visiting.If you're looking to escape the hustle and bustle of the city, this is your place. You can fully immerse into nature here, and check out some wildlife. There are some bat viewing areas. The trail at some points can be uneven and muddy, so please come prepared.",
        difficulty: "moderate",
        length: 9.5,
        elevation: 127,
        duration: "2 h 39 m",
        route: "Loop"
    },
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/25308756/extra_large_74339bf9a7dc9eb3331800a35fe06820.jpg",
        name: "Bourke's Lookout via Glasgow",
        location: "Dandenong Ranges National Park",
        address: "Osprey Road, Mount Dandenong VIC 3767",
        intro: "Bourke's Lookout via Glasgow Track is a 2.3 kilometer moderately trafficked out and back trail located near Melbourne, Victoria, Australia that offers the chance to see wildlife and is rated as difficult. The trail offers a number of activity options and is accessible year-round.",
        discription: "This is a tough hike that will definitely get the blood flowing! The first 30-45 minutes are almost straight up, and then you're rewarded with great views at the top. There are more trails from the top if you wish to extend your hike.",
        difficulty: "hard",
        length: 2.3,
        elevation: 339,
        duration: "1 h 19 m",
        route: "Out & back"
    },
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/25582128/extra_large_c9bfad33282fc0b5f59e6ad3c642e037.jpg",
        name: "Capital City Trail",
        location: "Melbourne, Victoria, Australia",
        address: "Capital City Trail, Docklands VIC 3008",
        intro: "Capital City Trail is a 29.6 kilometer moderately trafficked loop trail located near Melbourne, Victoria, Australia that features a river and is good for all skill levels. The trail is primarily used for hiking, walking, running, and road biking and is accessible year-round.",
        discription: "A pleasant riding trail with a variety of landscapes, giving you a tour of Melbourne. Regular water fountains and a few coffee places where one can stop. Nothing difficult or dangerous, but there are stairs at Gipps Street / Collins Bridge (there is also a ramp there). The trail is mostly well signposted, except at a few locations.",
        difficulty: "easy",
        length: 29.6,
        elevation: 273,
        duration: "8 h 1 m",
        route: "Loop"
    },
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/20970352/extra_large_e6596c436a10be4967e340eb2d728740.jpg",
        name: "Lyrebird Track",
        location: "Dandenong Ranges National Park",
        address: "Lyrebird Track, Tremont VIC ",
        intro: "Lyrebird Track is a 4.8 kilometer heavily trafficked loop trail located near Melbourne, Victoria, Australia that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round.",
        discription: "This is a great after work hike that will get the heart pumping! The route goes up the infamous 1000 steps on Tree Fern Gully Track, on to One Tree Hill. Then turn around and come down Lyrebird Track back to the start.",
        difficulty: "moderate",
        length: 4.8,
        elevation: 336,
        duration: "1 h 57 m",
        route: "Loop"
    },
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/26636366/extra_large_31ce69cf8a2f38aac4a0e9c9520a3047.jpg",
        name: "Dandenong Ranges Loop",
        location: "Dandenong Ranges National Park",
        address: "School Rd, Tremont VIC 3786",
        intro: "Dandenong Ranges Loop is a 12.1 kilometer loop trail located near Melbourne, Victoria, Australia that offers the chance to see wildlife and is rated as moderate. The trail offers a number of activity options.",
        discription: "",
        difficulty: "moderate",
        length: 12.1,
        elevation: 389,
        duration: "3 h 53 m",
        route: "Loop"
    },
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/14272903/extra_large_eda6a14e84fd445d1fa4508e38ceabe3.jpg",
        name: "Sherbrooke Falls Loop via Lloyds, Hackett, Pound Creek , Hillclimb, and Monument Tracks",
        location: "Dandenong Ranges National Park",
        address: "Odonohue Track, Sherbrooke VIC 3789",
        intro: "Sherbrooke Falls Loop via Lloyds, Hackett, Pound Creek , Hillclimb, and Monument Tracks is a 7.6 kilometer moderately trafficked loop trail located near Melbourne, Victoria, Australia that features a waterfall and is good for all skill levels. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round.",
        discription: "",
        difficulty: "easy",
        length: 7.6,
        elevation: 388,
        duration: "2 h 45 m",
        route: "Loop"
    },
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/25700089/extra_large_01afaeb8e3efda23c7bda7d8c83e5288.jpg",
        name: "Sherbrooke Falls",
        location: "Dandenong Ranges National Park",
        address: "Odonohue Track, Sherbrooke VIC 3789",
        intro: "Sherbrooke Falls is a 2.1 kilometer moderately trafficked out and back trail located near Melbourne, Victoria, Australia that features a waterfall and is good for all skill levels. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round.",
        discription: "",
        difficulty: "easy",
        length: 2.1,
        elevation: 82,
        duration: "42 m",
        route: "Out & back"
    },
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/25510976/extra_large_8985821b24e4c8cf7609c6a3b00d2093.jpg",
        name: "RJ Hamer Arboretum Loop: Dam, Cornus, Black Hole, Mathias Road",
        location: "Dandenong Ranges National Park",
        address: "10 Chalet Rd, Olinda VIC 3788",
        intro: "RJ Hamer Arboretum Loop: Dam, Cornus, Black Hole, Mathias Road is a 4.8 kilometer moderately trafficked loop trail located near Melbourne, Victoria, Australia that offers the chance to see wildlife and is good for all skill levels. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round.",
        discription: "",
        difficulty: "easy",
        length: 4.8,
        elevation: 235,
        duration: "1 h 44 m",
        route: "Loop"
    },
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/14042744/extra_large_902ae9bfe781b2aa986f4036bfa06637.jpg",
        name: "Bay Trail: Port Melbourne to Mordialloc",
        location: "Melbourne, Victoria, Australia",
        address: "Port Melbourne VIC 3207",
        intro: "Bay Trail: Port Melbourne to Mordialloc is a 30.1 kilometer lightly trafficked point-to-point trail located near Melbourne, Victoria, Australia that offers scenic views and is rated as moderate. The trail is primarily used for walking, running, road biking, and mountain biking. Dogs are also able to use this trail but must be kept on leash.",
        discription: "",
        difficulty: "moderate",
        length: 30.1,
        elevation: 240,
        duration: "8 h 3 m",
        route: "Point to point"
    },
    {
        image: "https://cdn-assets.alltrails.com/uploads/photo/image/26821515/extra_large_855a2524a4816bf6369610f9452a689b.jpg",
        name: "Lilydale Warburton Rail Trail",
        location: "Melbourne, Victoria, Australia",
        address: "Warburton Rail Trail, Victoria",
        intro: "Lilydale Warburton Rail Trail is a 38.1 kilometer moderately trafficked point-to-point trail located near Melbourne, Victoria, Australia that offers scenic views and is rated as moderate. The trail offers a number of activity options.",
        discription: "",
        difficulty: "moderate",
        length: 38.1,
        elevation: 494,
        duration: "10 h 38 m",
        route: "Point to point"
    },
];

const userSeed = [
    {
        username: "admin",
        email: "gavindxy@gmail.com",
        password: "19931026",
    },
    {
        username: "user1",
        email: "user1@gmail.com",
        password: "19931026",
    },
    {
        username: "user2",
        email: "user2@gmail.com",
        password: "19931026",
    },
    {
        username: "user3",
        email: "user3@gmail.com",
        password: "19931026",
    },
    {
        username: "user4",
        email: "user4@gmail.com",
        password: "19931026",
    },
    {
        username: "user5",
        email: "user5@gmail.com",
        password: "19931026",
    },
    {
        username: "user6",
        email: "user6@gmail.com",
        password: "19931026",
    },
    {
        username: "user7",
        email: "user7@gmail.com",
        password: "19931026",
    },
    {
        username: "user8",
        email: "user8@gmail.com",
        password: "19931026",
    },
    {
        username: "user9",
        email: "user9@gmail.com",
        password: "19931026",
    },
]

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

    db.User.remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
