import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Course = (props) => {
    const { title, price, visible_instructors: { display_name: instructor }, image_480x270: img, } = props.course;
    const handleAddProduct = props.handleAddProduct;
    return (
        <div>
            <div className="course-details">
                <img src={img} className="img-fluid" alt="" />
                <h1>{title}</h1>
                <p><small>By : {instructor} </small></p>
                <p>{price}</p>
                <button onClick={() => handleAddProduct(props.course)} className="btn btn-success">Add to cart</button>
            </div>
        </div>
    );
};

export default Course;