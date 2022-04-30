import { useCallback, useState } from "react";
import axios from "axios";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestUrl, setData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(requestUrl);
      setData(response.data.consolidated_weather.slice(1)); //The array gets sliced after the first index because it initially returns 6 items (current day + next 5 days), but here we only want the next 5 days
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
