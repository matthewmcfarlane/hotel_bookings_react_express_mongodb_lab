import { deleteBooking } from "../services/BookingsService";
import { updateBookingDB } from "../services/BookingsService";

const BookingItem = ({booking, removeBooking, updateBookingState}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })

    }

    const handleEdit = (data) => {
        updateBookingDB(booking._id, data).then(() => {
            updateBookingState(booking._id, data)
        })
    }
    return ( 
        <li>
        <p>{ booking.name }</p>
        <p>{ booking.email }</p>
        { booking.checkIn ? <p id="checked-in" onClick={handleEdit({checkIn: false})}> Checked In</p> : <p id="checked-out" onClick={handleEdit({checkIn: true})}>Checked Out</p>}
        <button onClick={handleDelete}>🗑</button>
        <hr />
        </li>
     );
}
 
export default BookingItem;