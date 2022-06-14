import React, {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, error, loading};
}

export default useFetch;
