use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Jack Cogan",
        email: "jackcogan97@y7mail.com",
        checkIn: "no"
    },
    {
        name: "Dwayne 'The Rock' Johnson",
        email: "therock@theboulder.us",
        checkIn: "yes"
    },
    {
        name: "Moana",
        email: "chieftui@village.com",
        checkIn: "no"
    },
    {
        name: "Bruno",
        email: "we-dont-talk-about-bru-no-no-no@encanto.com",
        checkIn: "yes"
    }
]);