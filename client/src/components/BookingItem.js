

const BookingItem = ({booking}) => {

    return ( 
        <li>{ booking.name }
        { booking.email }
        { booking.checkIn }</li>
     );
}
 
export default BookingItem;