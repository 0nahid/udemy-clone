import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart/Cart';
import Course from './components/Course/Course';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://mocki.io/v1/e598cb62-d43c-448a-bf26-456d5dc64509')
      .then(res => res.json())
      .then(data => setCourse(data))
      .catch(err => console.log(err))
  }, []);
  const handleAddProduct = (product) => {
    // console.log('added', product);
    const newCart = [...cart, product];
    setCart(newCart);
  }
  return (
    <div>
      <Container>
        <Header></Header>
        <Row>
          <Col md={3}></Col>
          <Col md={4}></Col>
          <Col md={5}>
            <Cart cart={cart} ></Cart>
          </Col>
        </Row>
        {course.map(course =>
          <Course course={course}
            key={course.tracking_id}
            handleAddProduct={handleAddProduct}
          ></Course>)}
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
