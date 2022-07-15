import React from 'react';

function Clock02() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return (
        <div>
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {' : '}
            {('0' + minutes).slice(-2)}
            {' : '}
            {(('0'+seconds).slice(-2))} 
            {hours >12 ? 'PM':'AM'}
        </div>
    );
}

export default Clock02;