import BookingItem from "./BookingItem";

const BookingList = ({bookings, removeBooking}) => {

    const bookingItems = bookings.map((booking, index) => {
        
        return <BookingItem booking={booking} key={index} removeBooking={removeBooking}/> 

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