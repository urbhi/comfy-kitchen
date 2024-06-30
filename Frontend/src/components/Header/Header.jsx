import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Where Every Bite is a Delight</h2>
                <p>Welcome to Our Restaurant, where every bite is a delight! Order online for a quick and delicious meal, expertly crafted and served on your table.</p>
                <Link to='/myTable'><button>Book Your Table</button></Link>
            </div>
        </div>
    )
}

export default Header
