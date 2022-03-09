import React from 'react'
import BookingBtn from '../components/Booking-button'
import Bookings from '../components/Bookings'
// import Header from '../components/Header'
const Home = () => {
    return (
        <section className='booking-page'>
            <dvi className='bookingbtn'>
                <h1>Bookings</h1>
                <div className='the-button'>
                    <BookingBtn />
                </div>
            </dvi>
            <div className='row'>
                <div className='info-block'>
                    <h2>Customer</h2>
                </div>
                <div className='info-block'>
                    <h2>Email</h2>
                </div>
                <div className='info-block'>
                    <h2>Address</h2>
                </div>
                <div className='info-block'>
                    <h2>Booking Type</h2>
                </div>
                <div className='info-block'>
                    <h2>Booking Date/Time</h2>
                </div>
            </div>
            <div className='customers'>
                <Bookings />
            </div>
        </section>
    )
}

export default Home