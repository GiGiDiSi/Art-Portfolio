import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Btn() {
    const folders = ['Originals', 'FanArts', 'Animation']
    return (
        <div className="container">
                {folders.map(f => (
                    <Link to={f} key={f}>
                        <button key={f} className='btn btn-dark' >
                        <h3>{f}</h3>
                        </button>
                    </Link>
                ))}
        </div>
    );
}

export default Btn;
