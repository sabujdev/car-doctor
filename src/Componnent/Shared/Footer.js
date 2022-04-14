import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <div className=' bg-primary'>
            <h5 className='text-center p-4'> <small>AllcopyRight @ {year}</small> </h5>
            </div>
    );
};

export default Footer;