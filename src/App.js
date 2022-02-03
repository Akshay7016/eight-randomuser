import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from "reactstrap"
import './App.css';

import Axios from 'axios';
import MyCard from './MyCard';

const App = () => {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    // Destructuring of data
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);

    // To see Tree - refer jsonformatter and then access array
    //below "details" and useState "details" are different
    const details = data.results[0];

    setDetails(details);
  }

  // To load data before component gets render
  useEffect(() => {
    fetchDetails();
  }, [])


  return (
    <Container fluid className='p-4 bg-primary App'>
      <Row>
        <Col md={4} className='offset-md-4 mt-4'>
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
