import { useState } from "react";

const BookingForm = ({createBooking}) => {

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[checkIn, setCheckIn] = useState(false)


    const handleNameChange = event => setName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handleCheckInChange = event => setCheckIn(event.target.checked)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const booking = {
            name,
            email,
            checkIn
        }
        createBooking(booking)
        setName('')
        setEmail('')
        setCheckIn(false)
    }


    return ( 
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required />

        <label htmlFor="email">Email:</label>
        <input type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required />

        <label htmlFor="check-in">Checked In?</label>
        <input type="checkbox" name="check-in" id="check-in" value={checkIn} onChange={handleCheckInChange}/>
            <input type="submit" name="submit" value="Save" />
        </form>
     );
}
 
export default BookingForm;