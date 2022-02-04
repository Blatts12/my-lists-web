import React from "react";
import { Item } from "../../models/item/Item";
import { styled } from "../../stitches.config";

interface LatestItemProps {
  item: Item;
}

const ItemContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "max-content auto",
  background: "$uiBackgroundSelect",
  borderRadius: "10px",
});

const Image = styled("img", {
  maxHeight: "12rem",
  borderRadius: "10px 0 0 10px",
});

const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "130px",
  padding: "0.5rem",
});

const LatestItem: React.FC<LatestItemProps> = ({ item }) => {
  return (
    <ItemContainer>
      <Image src={item.imageUrl} alt="Image" />
      <InfoContainer>
        <p>{item.title}</p>
        <p>{item.type.name}</p>
      </InfoContainer>
    </ItemContainer>
  );
};

export default LatestItem;
