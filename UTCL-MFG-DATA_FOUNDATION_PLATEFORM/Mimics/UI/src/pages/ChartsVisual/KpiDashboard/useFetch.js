import { useState, useEffect } from "react";

const useFetch = (url, body, token) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [ok, setOk] = useState(true);
  const [status, setStatus] = useState(200);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          signal,
        });
        console.log(response);
        const responseData = await response.json();
        setOk(response.ok);
        setStatus(response.status);
        setData(responseData);
      } catch (error) {
        setError(error);
        console.log(error);
        return error;
      }
    };

    fetchData();
    return () => {
      abortController.abort(); // Abort the fetch request when the component is unmounted
    };
  }, [body.section, body.plants]);

  return { error, data, ok, status };
};

export default useFetch;
