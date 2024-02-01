import React from 'react';
import './copyright.css'

const Copyright = () => {
    const date = new Date()
    return (
        <footer className='copyright'>
            <h3 >&copy; Innovative Computer Engineering Students' Society {date.getFullYear()}.
                All Rights Reserved. </h3>
        </footer>
    )
}

export default Copyright;