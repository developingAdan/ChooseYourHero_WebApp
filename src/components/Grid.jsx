// this is basically an HTML element with a class name on it. This is where we build a reuseable Grid

import React from 'react';

export default function Grid({children}) {
    return (
        <div className='grid'>{children}</div>
    )
}