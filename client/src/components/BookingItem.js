import { deleteBooking } from "../services/BookingsService";


const BookingItem = ({booking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })

    }

    return ( 
        <li>
        { booking.name }
        { booking.email }
        { booking.checkIn }
        <button onClick={handleDelete}>🗑</button>
        </li>
     );
}
 
export default BookingItem;