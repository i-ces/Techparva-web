import React from 'react';
import './copyright.css'

const Copyright = () => {
    const date = new Date()
    return (
        <div className='copyright'>
            <h3 >&copy; Innovative Computer Engineering Students' Society {date.getFullYear()}.
                All Rights Reserved. </h3>
        </div>
    )
}

export default Copyright;