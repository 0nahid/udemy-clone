import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Course = (props) => {
    const { title, price, visible_instructors: { display_name: instructor }, image_480x270: img, } = props.course;
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-md-9">
                        <img src={img} className="img-fluid" alt="" />
                        <h1>{title}</h1>
                        <p><small>By : {instructor} </small></p>
                        <p>{price}</p>
                    </div>
                    <div className="col-md-3">

                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Course;