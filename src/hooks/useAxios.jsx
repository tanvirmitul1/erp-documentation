import { useState } from 'react';
import axios from 'axios';

const useAxios = (url, method) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (payload) => {
    setIsLoading(true);
    try {
      const response = await axios({ url, method, data: payload });
      setData(response.data);
      setIsLoading(false);
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
      setIsLoading(false);
      throw err; // Re-throw the error so the component can handle it in its own way
    }
  };

  return { data, error, isLoading, fetchData };
};

export default useAxios;
