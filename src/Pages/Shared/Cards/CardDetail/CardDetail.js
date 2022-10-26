import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardDetail = ({ detail }) => {
    const { id, name, image, details, price, duration } = detail;
    return (
        <div className='mb-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 150 ?
                                <p>{details.slice(0, 150) + '...'}
                                    <Link className="text-decoration-none" to={`/details/${id}`}> Read More</Link>
                                </p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <div>
                        <span className='me-5'>Duration: {duration} Weeks</span>
                        <span>Fee: ${price}</span>
                    </div>
                    <Button variant="primary"><Link className="text-decoration-none text-light" to={`/details/${id}`}> Join Premium Course </Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardDetail;