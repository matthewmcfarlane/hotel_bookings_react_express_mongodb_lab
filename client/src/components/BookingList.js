import BookingItem from "./BookingItem";

const BookingList = ({bookings}) => {

    const bookingItems = bookings.map((booking, index) => {
        
        return <BookingItem booking={booking} key={index} /> 

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