import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const FlightSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlightDetails = styled(FlightSection)``;

export const FromTag = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
  > span {
    color: #555;
    font-size: 0.75rem;
  }
`;

export const TimerTag = styled(FromTag)`
  margin: 0 55px 0 75px;
  font-size: 23px;
  > span {
    color: #555;
    font-size: 0.6rem;
  }
`;

export const StopTag = styled(TimerTag)`
  margin: 0 60px 0 40px;
`;

export const NameTag = styled(TimerTag)`
  margin: 0 59px 0 50px;
  font-size: 26px;
`;

export const FilterSection = styled(FlightSection)`
  padding: 0 30px;
  margin-top: 20px;
  > div > div {
    margin: 0 0 0 20px;
  }
`;

export const TableSection = styled.div`
  padding: 10px 30px;
`;

export const emptyPage = css`
  margin: 40px;
`;
export const priceTags = css`
  width: 300px;
`;
