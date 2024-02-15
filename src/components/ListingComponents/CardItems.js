import React from "react";
import { Button, Card } from "antd";
import { priceTags } from "./styles";
const { Meta } = Card;
const CardItems = () => (
  <Card
    className={priceTags}
    cover={
      <img
        alt="flight"
        src="https://papers.co/wallpaper/papers.co-my72-flight-sky-plane-cloud-nature-29-wallpaper.jpg"
      />
    }
    actions={[<Button type="primary">Book</Button>]}
  >
    <Meta
      title="Saver"
      description="Select a fare and continue to make this booking."
    />
  </Card>
);
export default CardItems;
