import React from "react";
import { Link } from "react-router-dom";
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
  boxShadow: "1px 1px 4px 0px rgba(0,0,0,0.5)",
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

const TitleLink = styled(Link, {
  color: "inherit",
  textDecoration: "none",
});

const LatestItem: React.FC<LatestItemProps> = ({ item }) => {
  return (
    <ItemContainer>
      <Link to={`/item/${item.id}`}>
        <Image src={item.imageUrl} alt="Image" />
      </Link>

      <InfoContainer>
        <TitleLink to={`/item/${item.id}`}>{item.title}</TitleLink>
        <p>{item.type.name}</p>
      </InfoContainer>
    </ItemContainer>
  );
};

export default LatestItem;
