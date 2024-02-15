import React, { useEffect, useState, useContext, Suspense, lazy } from "react";
import { Collapse, Empty, Spin } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { CreateContext } from "../../context/FlightData";

import { FilterSection, TableSection, emptyPage } from "./styles";
import { onFaseOptions } from "../../constants/en";
dayjs.extend(customParseFormat);

const ListItemsComponent = lazy(() => import("./ListItems.js"));
const CardItemsComponent = lazy(() => import("./CardItems.js"));
const FilterSelectComponent = lazy(() => import("../Dropdown/FilterSelect.js"));

export default function FlightList({ lists }) {
  const { airlines } = useContext(CreateContext);
  const [filterItems, setFiltersItems] = useState(null);
  const [filtersOnFase, setFiltersOnFase] = useState(0);
  const [filtersOnAirlineName, setFiltersOnAirlineName] = useState([]);

  useEffect(() => {
    const filtered = lists
      .filter((ele) =>
        filtersOnAirlineName?.length
          ? filtersOnAirlineName.includes(
              ele.displayData?.airlines?.[0].airlineName
            )
          : 1
      )
      ?.sort((flg1, flg2) => {
        return filtersOnFase ? flg2.fare - flg1.fare : flg1.fare - flg2.fare;
      });

    setFiltersItems(filtered);
  }, [filtersOnFase, filtersOnAirlineName, lists]);

  const renderFilterLists = filterItems?.map((ele) => ({
    key: ele.id,

    label: (
      <Suspense
        fallback={
          <div>
            {" "}
            <Spin />
          </div>
        }
      >
        <ListItemsComponent displayData={ele.displayData} fare={ele.fare} />
      </Suspense>
    ),
    children: (
      <Suspense
        fallback={
          <div>
            {" "}
            <Spin />
          </div>
        }
      >
        <CardItemsComponent />
      </Suspense>
    ),
  }));

  const airlineNameOptions = airlines.map((ele) => {
    return {
      value: ele,
      label: ele,
    };
  });

  if (!filterItems?.length) {
    return (
      <Empty
        className={emptyPage}
        description={
          <span>
            Currently, there are no flights available on this route right now!!
          </span>
        }
      />
    );
  }

  return (
    <>
      <FilterSection>
        <div></div>
        <div>
          <span>Filter:</span>
          <Suspense
            fallback={
              <div>
                {" "}
                <Spin />
              </div>
            }
          >
            <FilterSelectComponent
              mode="tags"
              value={filtersOnAirlineName}
              placeholder="Fliter By Airlines Name"
              options={airlineNameOptions}
              onChange={setFiltersOnAirlineName}
            />
          </Suspense>
          <Suspense
            fallback={
              <div>
                {" "}
                <Spin />
              </div>
            }
          >
            <FilterSelectComponent
              value={filtersOnFase}
              placeholder="Sort the Flight On Price"
              options={onFaseOptions}
              onChange={setFiltersOnFase}
            />
          </Suspense>
        </div>
      </FilterSection>

      <TableSection>
        <Collapse
          size="large"
          items={renderFilterLists}
          expandIconPosition="end"
        />
      </TableSection>
    </>
  );
}
