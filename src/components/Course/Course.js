import React from 'react';
import { Card, Button, Container, Row, Col, CardGroup } from 'react-bootstrap';

const Course = (props) => {
    const { title, price, visible_instructors: { display_name: instructor }, image_480x270: img, } = props.course;
    const handleAddProduct = props.handleAddProduct;
    return (
        <Container>
            <Row>
                <Col lg="4">
                    <Card>
                        <Card.Img variant="top" className="img-fluid" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <p><small>By : {instructor} </small></p>
                                <p>{price}</p>
                            </Card.Text>
                            <Button onClick={() => handleAddProduct(props.course)} variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default Course; 