import { useState, useEffect } from "react";

import instance from "utils/api";

function useFetch(url: string, options: any = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await instance.get(url, options);
        setResponse(res.data);
      } catch (error) {
        setError(error);
      }
    };

    fetch();
  }, []);

  return { response, error };
}

export default useFetch;
