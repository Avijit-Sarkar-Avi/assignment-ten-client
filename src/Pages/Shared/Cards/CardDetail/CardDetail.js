import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardDetail = ({ detail }) => {
    const { id, name, image, details, price, duration } = detail;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div>
                        <span className='me-5'>Duration: {duration} Weeks</span>
                        <span>Fee: ${price}</span>
                    </div>
                    <Button variant="primary">Join Course</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardDetail;