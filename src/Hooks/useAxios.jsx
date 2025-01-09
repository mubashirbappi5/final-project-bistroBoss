import axios from 'axios';

const axiosinstance = axios.create({
    baseURL: 'http://localhost:3000',
    
  });
const useAxios = () => {
    return  axiosinstance;
};

export default useAxios;