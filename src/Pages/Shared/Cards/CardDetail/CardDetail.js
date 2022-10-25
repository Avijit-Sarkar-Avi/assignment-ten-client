import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardDetail = ({ detail }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={detail.image} />
                <Card.Body>
                    <Card.Title>{detail.name}</Card.Title>
                    <Card.Text>
                        {detail.details}
                    </Card.Text>
                    <div>
                        <span className='me-5'>Duration: {detail.duration} Weeks</span>
                        <span>Fee: ${detail.price}</span>
                    </div>
                    <Button variant="primary">Join Course</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardDetail;