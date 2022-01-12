import BookingItem from "./BookingItem";

const BookingList = ({bookings, removeBooking, updateBookingState}) => {

    const bookingItems = bookings.map((booking, index) => {
        
        return <BookingItem booking={booking} key={index} removeBooking={removeBooking} updateBookingState={updateBookingState}/> 

    })


    return (
        <>
        <ul>
            {bookingItems}
        </ul>
        </>
    );
}
 
export default BookingList;