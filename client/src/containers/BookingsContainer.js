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

    // const addBooking = (booking) => {
    //     const temp = bookings.map(b => b);
    //     temp.push(booking);
    //     setBookings(temp);
    // }

    const removeBooking = (id) => {

            const temp = bookings.map(b => b);
            const indexToDel = temp.map(b => b._id).indexOf(id);
    
            temp.splice(indexToDel, 1);
            setBookings(temp);
            
    }

    return ( 
        <>
            <h2>Bookings Container</h2>
            <BookingForm createBooking={createBooking} />
            <BookingList bookings={bookings} removeBooking={removeBooking}/>
        </>
     );
}
 
export default BookingsContainer;