import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiospublic from './useAxiospublic';

const UseMenu = () => {
    const axiospublic = useAxiospublic()
    
    const { data:menu=[],refetch } = useQuery({
        queryKey: ['menu'],
        queryFn:async () =>{
          const res = await axiospublic.get('/menu')
          return res.data
        }
       
      })
      return [menu,refetch]
};

export default UseMenu;