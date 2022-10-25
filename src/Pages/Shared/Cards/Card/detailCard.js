import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const detailCard = ({ detail }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{detail.name}</Card.Title>
                    <Card.Text>
                        {detail.details}
                    </Card.Text>
                    <Button variant="primary">Join Course</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default detailCard;