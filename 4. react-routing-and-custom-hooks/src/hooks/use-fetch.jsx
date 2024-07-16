import { useEffect } from "react";
import { useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      if (result) {
        setData(result);
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
