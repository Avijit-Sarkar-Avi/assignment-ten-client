import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/sidenav')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h2>Side Nav from router: {courses.length}</h2>
            <div>
                {
                    courses.map(course => <ListGroup className='mb-2' >
                        < ListGroup.Item key={course.id}>
                            <Link to={`/course/${course.id}`}>{course.name}</Link>
                        </ListGroup.Item>
                    </ListGroup>)
                }
            </div>
        </div>
    );
};

export default SideNav;