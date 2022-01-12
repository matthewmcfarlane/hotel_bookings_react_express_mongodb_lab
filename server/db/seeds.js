use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Jack Cogan",
        email: "jackcogan97@y7mail.com",
        checkIn: true
    },
    {
        name: "Dwayne 'The Rock' Johnson",
        email: "therock@theboulder.us",
        checkIn: false
    },
    {
        name: "Moana",
        email: "chieftui@village.com",
        checkIn: true
    },
    {
        name: "Bruno",
        email: "we-dont-talk-about-bru-no-no-no@encanto.com",
        checkIn: false
    }
]);