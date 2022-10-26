import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDetail from '../Shared/Cards/CardDetail/CardDetail';
import { Button } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const Tutorial = () => {
    const allDetails = useLoaderData();
    const ref = React.createRef();
    return (
        <div>

            <div className='mb-5' ref={ref}>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://www.biztechcs.com/wp-content/uploads/2021/07/12-Best-Programming-Languages-for-Web-App-Development.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Programmer Course</Card.Title>
                        <Card.Text>
                            Here you learn Programming languages like C, C++, Python, PHP, R
                        </Card.Text>
                        <Card.Text>
                            <Pdf targetRef={ref} filename="div-blue.pdf">
                                {({ toPdf }) => (
                                    <Button onClick={toPdf}>Generate Pdf</Button>
                                )}
                            </Pdf>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div>
                {
                    allDetails.map(detail => <CardDetail
                        key={detail.id}
                        detail={detail}
                    ></CardDetail>
                    )
                }
            </div>

        </div>
    );
};

export default Tutorial;