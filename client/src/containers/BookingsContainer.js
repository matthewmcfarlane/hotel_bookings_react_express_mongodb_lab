import React, {useState, useEffect} from "react";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";
import { getBookings, postBooking, deleteBooking } from "../services/BookingsService";


const BookingsContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        getBookings()
        .then(bookings => setBookings(bookings))
    }, [])


    const createBooking = (newBooking) => {
        postBooking(newBooking)
        .then(savedBooking => setBookings([...bookings, savedBooking]))
    }

    return ( 
        <>
            <h2>Bookings Container</h2>
            <BookingForm createBooking={createBooking} />
            <BookingList bookings={bookings}/>
        </>
     );
}
 
export default BookingsContainer;