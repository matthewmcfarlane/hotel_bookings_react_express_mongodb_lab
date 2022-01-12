import { deleteBooking } from "../services/BookingsService";
import { updateBookingDB } from "../services/BookingsService";

const BookingItem = ({booking, removeBooking, updateBookingState}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })

    }

    const handleUpdateCheckIn = () => {
        updateBookingDB(booking._id).then(() => {
            updateBookingState(booking._id)
        })
    }
    return ( 
        <li>
        <p>{ booking.name }</p>
        <p>{ booking.email }</p>
        { booking.checkIn ? <p> Checked In</p> : <p>Checked Out</p>}
        <button onClick={handleDelete}>🗑</button>
        <hr />
        </li>
     );
}
 
export default BookingItem;