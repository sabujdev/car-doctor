import React from 'react';
import { Button, Card,  } from 'react-bootstrap';
import './SingleService.css';

const SingleService = ({servise}) => {
        const {name, img, description , price,} =servise;


    return (
    <div className="d-flex justify-content-around">
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        
        <Card.Text>
            {description}
        </Card.Text>
        <p>Price: ${price}</p>
            <Button className='text-center w-100' variant="primary" size="lg">
                Buy Now
            </Button>
      </Card.Body>
    </Card>
</div>
    );
};

export default SingleService;