import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css';

const Services = () => {
    const [services, setServices] =useState([])
    useEffect(()=>{
        fetch('services.json').then(res=>res.json()).then(data =>setServices(data))
    },[])
    return (
        <div>
            <h1 className='service-title text-primary m-4 p-4'>Our  service </h1>
            <div className='services-container'>
            {
                services.map(servise =><SingleService
                     key ={servise.id}
                     servise ={servise}
                
                ></SingleService>)
            }
            </div>
          
        </div>
    );
};

export default Services;