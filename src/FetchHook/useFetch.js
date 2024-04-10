import { useEffect, useState } from "react";
const useFetch = (url,deletedTaskId,newTask) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    // Make the request
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted ");
        }else{
          setIsPending(false);console.log(err)
          setError("could not fetch data");
        }
   
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url, deletedTaskId,newTask]);

  return { data, isPending, error };
};
export default useFetch;
