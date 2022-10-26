import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the speciality of the course?</Accordion.Header>
                    <Accordion.Body>
                        You have to learn Coding on this tutorial. We support any time when needed. Our course is user friendly.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why we purchase this course?</Accordion.Header>
                    <Accordion.Body>
                        This is course of learing programming. Programming is essential of our every profession. That's why you purchase it.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>After learnig what we get benifit?</Accordion.Header>
                    <Accordion.Body>
                        After finish the course of our regular shedule, you get chance to work our job placement team.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Can every one purchase it?</Accordion.Header>
                    <Accordion.Body>
                        Yes, the course module is prepared for every stage of student. So any one purchase this course.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>How times the expire of the corse?</Accordion.Header>
                    <Accordion.Body>
                        If user purchase one time get life time access.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;