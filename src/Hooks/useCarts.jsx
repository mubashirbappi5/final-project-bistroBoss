import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from './useAxios';
import useAuth from './useAuth';

const useCarts = () => {
    const axiosscure = useAxios()
    const {user} = useAuth()
    const {refetch,data:cart=[]} = useQuery({
        queryKey: ['cart',user?.email],
        queryFn:async () => {
            const res = await axiosscure.get(`/carts?email=${user.email}`)
            return res.data
        },
    })
    return [cart,refetch]
};

export default useCarts;