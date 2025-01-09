import axios from 'axios';
import React from 'react';
const axiospublic = axios.create({
    baseURL: 'http://localhost:3000',
    
  });
const useAxiospublic = () => {
    return axiospublic
};

export default useAxiospublic;