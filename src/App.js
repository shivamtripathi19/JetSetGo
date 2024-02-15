import "./App.css";
import { useState, useEffect, Suspense, lazy, useContext } from "react";
import useFetch from "./hooks/useFetch";
import { Spin } from "antd";

import { CreateSearchContext } from "./context/SearchData";

const FlightListWrapperComponent = lazy(() =>
  import("./components/ListingComponents/FlightList.js")
);

const HeaderComponent = lazy(() => import("./components/Header/Header.js"));

function App() {
  const { userSearch } = useContext(CreateSearchContext);
  const [filterData, setFilterData] = useState([]);
  const { data } = useFetch();

  const { from, to } = userSearch;
  useEffect(() => {
    let items = data;
    if (from && to) {
      items = items.filter((flightItem) => {
        const flightData = flightItem?.displayData;
        return (
          flightData?.source?.airport.cityName === from &&
          flightData?.destination?.airport.cityName === to
        );
      });
    }
    setFilterData(items);
  }, [from, to, data]);

  return (
    <div className="App">
      <header className="App-header">
        <Suspense
          fallback={
            <div>
              <Spin />
            </div>
          }
        >
          <HeaderComponent />
        </Suspense>
        <Suspense
          fallback={
            <div>
              <Spin />
            </div>
          }
        >
          <FlightListWrapperComponent lists={filterData} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
