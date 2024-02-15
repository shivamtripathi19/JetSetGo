import React from "react";
import dayjs from "dayjs";
import {
  FlightDetails,
  FlightSection,
  FromTag,
  NameTag,
  StopTag,
  TimerTag,
} from "./styles";

const ListItems = ({ displayData, fare }) => {
  const { airlines, destination, stopInfo, source, totalDuration } =
    displayData;

  return (
    <>
      <FlightSection>
        <FlightDetails>
          <FromTag>
            {dayjs(source?.depTime).format("HH:mm")}
            <span>{dayjs(source?.depTime).format("DD-MM-YYYY")}</span>
            <span>{source?.airport?.cityCode || ""}</span>
          </FromTag>
          <TimerTag>✈️</TimerTag>
          <FromTag>
            {dayjs(destination?.depTime).format("HH:mm")}
            <span>{dayjs(destination?.depTime).format("DD-MM-YYYY")}</span>
            <span>{destination?.airport?.cityCode || ""}</span>
          </FromTag>

          <TimerTag>
            {totalDuration}
            <span>Duration</span>
          </TimerTag>

          <StopTag>
            {stopInfo}
            <span>Stops</span>
          </StopTag>
          <NameTag>
            {airlines?.[0].airlineName}
            <span>Airline Name</span>
          </NameTag>
        </FlightDetails>
        <FlightDetails>
          <FromTag>
            {`Rs. ${fare}`}
            <span>fare</span>
          </FromTag>
        </FlightDetails>
      </FlightSection>
    </>
  );
};

export default ListItems;
