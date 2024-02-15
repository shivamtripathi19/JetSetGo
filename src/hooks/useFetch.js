import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/base";
import { CreateContext } from "../context/FlightData";
const instance = axios.create({
  baseURL: BASE_URL,
});

function useFetch() {
  const {
    handleSourceItems,
    handleDestinationItems,
    handleAirlinesResultItems,
  } = useContext(CreateContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    instance
      .get("/4829d4ab0e96bfab50e7")
      .then(({ data: { data } }) => {
        const destinationResult = [];
        const airlinesResult = [];
        const sourceResult = [];
        data?.result?.forEach((flightItem) => {
          const dataItems = flightItem?.displayData;
          const sourceName = dataItems?.source?.airport.cityName;
          const destinationName = dataItems?.destination?.airport.cityName;

          dataItems?.airlines?.forEach((ele) => {
            if (!airlinesResult?.includes(ele?.airlineName)) {
              airlinesResult.push(ele?.airlineName);
            }
          });

          if (!sourceResult?.includes(sourceName)) {
            sourceResult?.push(sourceName);
          }
          if (!destinationResult?.includes(destinationName)) {
            destinationResult?.push(destinationName);
          }
        });
        handleSourceItems(sourceResult);
        handleDestinationItems(destinationResult);
        handleAirlinesResultItems(airlinesResult);
        setData(data?.result);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

export default useFetch;
