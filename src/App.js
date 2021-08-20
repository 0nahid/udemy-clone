import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Course from './components/Course/Course';

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
    console.log('added', product);
    const newCart = { ...cart, product };
    setCart(newCart);
  }
  return (
    <div>
      {course.map(course => <Course course={course} key={course.tracking_id} handleAddProduct={handleAddProduct} ></Course>)}
    </div>
    
  );
}

export default App;
