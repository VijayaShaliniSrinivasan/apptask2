import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Home.css';

const images = [
  "images/member1.jpg",
  "images/member2.jpg",
  "images/member3.jpg",
  "images/member4.jpg",
  "images/member5.jpg",
  "images/member6.jpg",
  "images/member7.jpg",
  "images/member8.jpg",
  "images/member9.jpg",
  "images/member10.jpg",
];

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setUser(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect once

  return (
    <div className="container-fluid">
      <h1 className='header mt-3'>USER DETAILS</h1>
      <Row className="justify-content-center mt-5">
        {user.map(details => (
          <Col lg={4} md={6} xs={12} key={details.id} className='mt-4'>
            <Card>
              <Card.Img variant="top" src={images[details.id - 1]} />
              <Card.Body>
                <Card.Text>
                  <div className="content">
                    <p><span>Name :</span>{details.name}</p>
                    <p><span>Username :</span>{details.username}</p>
                    <p><span>Email :</span>{details.email}</p>
                    <p><span>Address :</span>
                      <pre>
                        {details.address.street},<br />
                        {details.address.suite},<br />
                        {details.address.city},<br />
                        {details.address.zipcode}<br />
                      </pre>
                    </p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
