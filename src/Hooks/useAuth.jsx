import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthProvider';

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
};

export default useAuth;