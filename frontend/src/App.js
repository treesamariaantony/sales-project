// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import BarChart from './components/BarChart';
import axios from 'axios';

const App = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product data!', error);
      });
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      <Heading mb={6}>Product Dashboard</Heading>
      <Box bg="white" p={4} boxShadow="md" borderRadius="md">
        <BarChart data={productData} />
      </Box>
    </Container>
  );
};

export default App;
