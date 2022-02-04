import React from "react";
import { useQuery } from "react-query";
import { Item } from "../../models/item/Item";
import { styled } from "../../stitches.config";
import LatestItem from "./LatestItem";

const LatestItemsContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  marginInline: "1rem",
  background: "$uiBackground",
  boxShadow: "1px 1px 4px 0px rgba(0,0,0,0.5)",
  border: "1px solid $uiBorder",
  borderRadius: "10px",
  overflowX: "auto",
  overscrollBehaviorInline: "contain",
  scrollSnapType: "inline mandatory",
  scrollPaddingInline: "1rem",
  scrollbarWidth: "thin",
});

const ItemsContainer = styled("div", {
  display: "flex",
  marginInline: "0.25rem",
  paddingBlock: "0.1rem 0.6rem",
  paddingInline: "0.5rem",
  gap: "1rem",

  "& > *": {
    scrollSnapAlign: "start",
  },
});

const Title = styled("h4", {
  position: "sticky",
  left: "0",
  padding: "0.2rem 0.65rem",
});

const LatestItems: React.FC = () => {
  const { status, data } = useQuery(
    "latestItems",
    async () =>
      await fetch("http://localhost:3000/items").then((res) => res.json())
  );

  return (
    <LatestItemsContainer>
      <Title>Latest Items</Title>
      <ItemsContainer>
        {status === "loading"
          ? "Loading"
          : (data as Item[]).map((item) => (
              <LatestItem key={item.id} item={item} />
            ))}
      </ItemsContainer>
    </LatestItemsContainer>
  );
};

export default LatestItems;
