import { useContext, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Button } from "antd";
import { DingdingOutlined, SwapOutlined } from "@ant-design/icons";
import { CreateContext } from "../../context/FlightData";
import { CreateSearchContext } from "../../context/SearchData";
import {
  CardLayout,
  CompanyName,
  HeaderSection,
  NavBar,
  NavController,
  cardsItems,
  datePickerStyle,
  iconButton,
} from "./styles";
import { headerConstants } from "../../constants/en";
import InputTextWrapper from "../TextBoxWrapper/InputTextWrapper";
const { DATE_FORMAT, TITLE, HEADER_TITLE, FROM, TO, DEP, DEST, SEARCH } =
  headerConstants;

dayjs.extend(customParseFormat);

export default function Header() {
  const { source, destination } = useContext(CreateContext);
  const { handleSearchItems } = useContext(CreateSearchContext);
  const [searchItems, setSearchItems] = useState({
    from: "",
    to: "",
    startDate: dayjs(),
    returnDate: "",
  });

  const handleInputFromAndTo = (label, value) => {
    setSearchItems({ ...searchItems, [label]: value });
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    handleSearchItems(searchItems);
  };

  return (
    <>
      <HeaderSection>
        <h1>
          {TITLE}
          <DingdingOutlined />
        </h1>
      </HeaderSection>
      <NavController>
        <NavBar>
          <CompanyName>{HEADER_TITLE}</CompanyName>
          <CardLayout>
            <div className={cardsItems}>
              <span>{FROM}</span>
              <InputTextWrapper
                keys="from"
                label="Source"
                options={source}
                handleInput={handleInputFromAndTo}
              />
            </div>
            <div className={cardsItems}>
              <div className={iconButton}>
                <SwapOutlined />
              </div>
            </div>
            <div className={cardsItems}>
              <span>{TO}</span>
              <InputTextWrapper
                keys="to"
                label="Destination"
                options={destination}
                handleInput={handleInputFromAndTo}
              />
            </div>

            <div className={cardsItems}>
              <span>{DEP}</span>
              <DatePicker
                disabledDate={(current) =>
                  current.isBefore(dayjs().subtract(1, "day"))
                }
                defaultValue={dayjs(searchItems.startDate, DATE_FORMAT)}
                format={DATE_FORMAT}
                placement="bottomLeft"
                size="medium"
                className={datePickerStyle}
              />
            </div>
            <div className={cardsItems}>
              <span>{DEST}</span>
              <DatePicker
                disabledDate={(current) =>
                  current.isBefore(dayjs().subtract(1, "day"))
                }
                disabled
                format={DATE_FORMAT}
                placement="bottomLeft"
                size="medium"
                className={datePickerStyle}
              />
            </div>
            <div className={cardsItems}>
              <span></span>
              <Button
                type="primary"
                disabled={!searchItems?.from || !searchItems?.to}
                onClick={handleSubmitSearch}
              >
                {SEARCH}
              </Button>
            </div>
          </CardLayout>
        </NavBar>
      </NavController>
    </>
  );
}
