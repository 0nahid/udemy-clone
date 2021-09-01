import React from 'react';
// eslint-disable-next-line
import { Container, Col, Card, Row, ListGroup, Button, ListGroupItem } from 'react-bootstrap';


const Course = (props) => {
    // eslint-disable-next-line
    const { title, price, visible_instructors: { display_name: instructor }, image_480x270: img, headline, } = props.course;
    const handleAddProduct = props.handleAddProduct;
    return (
        <Container>
            <Row>
                <Col md={6} className="mt-3" >
                    <Card >
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text> <p><small>{headline}</small> </p> </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem> <small>Course By : </small>{instructor}</ListGroupItem>
                            <ListGroupItem> <span style={{ color: 'red', fontWeight: 'bold', fontSize: '18px' }}>{price}</span> </ListGroupItem>
                            <Button variant="primary" onClick={() => handleAddProduct(props.course) }  >Add to Cart</Button>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;
