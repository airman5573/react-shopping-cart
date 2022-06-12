import { useEffect, useState } from "react";

function useApiQuery({ queryFn, queryOnMount = false, onSuccess, onError }) {
  if (typeof queryFn !== "function") {
    throw new Error("queryFn는 함수이어야 합니다");
  }
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const queryWithStateControl = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await queryFn();
      const data = await response.json();
      setData(data);
      if (onSuccess && typeof onSuccess === "function") {
        onSuccess(data);
      }
    } catch (e) {
      setIsLoading(false);
      setError(e);
      if (onError && onError === "function") {
        onError(e);
      }
    }
  };

  useEffect(() => {
    queryOnMount && queryWithStateControl();
  }, []);

  return { isLoading, error, query: queryWithStateControl, data };
}

export default useApiQuery;
