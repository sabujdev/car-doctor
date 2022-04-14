import React from 'react';
import expert1 from '../../images/experts/expert-1.jpg';
import expert2 from '../../images/experts/expert-2.jpg';
import expert3 from '../../images/experts/expert-3.jpg';
import expert4 from '../../images/experts/expert-4.jpg';
import expert5 from '../../images/experts/expert-5.jpg';
import expert6 from '../../images/experts/expert-6.png';
import SingleExpart from '../SingleExpart/SingleExpart';


const Expart = () => {
    const exparts = [
        {id:1, name:'Will Smirt' ,img:expert1},
        {id:2, name:'Jon Duo' ,img:expert2},
        {id:3, name:'Shikha Roy' ,img:expert3},
        {id:4, name:'Dipok Roy' ,img:expert4},
        {id:5, name:'Mollika Rani' ,img:expert5},
        {id:6, name:'Sabuj Mahonto' ,img:expert6},
    ]

    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Our Expert </h1>
           <div className='row'>
           {
                exparts.map(expart =><SingleExpart  key={expart.id} expart ={expart }></SingleExpart>)
            }
           </div>
        </div>
    );
};

export default Expart;