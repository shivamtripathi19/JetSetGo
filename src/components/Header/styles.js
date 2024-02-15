import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const HeaderSection = styled.div`
  height: 120px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 8px 30px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavBar = styled.div`
  height: 120px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 10px 30px;
  align-items: flex-start;
  padding: 8px 30px;
  flex-direction: column;
  margin-top: -40px;
`;

export const FightingController = styled.div`
  top: 40px;
  height: 120px;
  width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 60px 20px 0;
`;

export const NavController = styled.div`
  padding: 0 150px;
  position: sticky;
  top: 100px;
  z-index: 10;
`;

export const card = css`
  width: 100%;
  margin: 0 auto 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: solid 1px #e7e7e7;
  position: relative;
`;

export const cardsItems = css`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > button {
    margin-top: 20px;
  }
  justify-content: center;
`;

export const iconButton = css`
  margin-top: 20px;
`;

export const datePickerStyle = css`
  width: 150,
  padding: 5px,
`;

export const CardLayout = styled.div`
  display: flex;
`;

export const CompanyName = styled.h2`
  margin: 7px;
`;
