import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaClock } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const CourseDetails = () => {
    const courseInfo = useLoaderData();
    const { image, id, name, details, duration } = courseInfo;
    return (
        <div>
            <Card>
                <Card.Header> <FaClock className='text-danger'></FaClock> {duration} Weeks</Card.Header>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`/course/${id}`}>
                        <Button variant="primary">Go Course</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;