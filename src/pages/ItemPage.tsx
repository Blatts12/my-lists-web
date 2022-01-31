import React from "react";
import { useParams } from "react-router-dom";

const ItemPage: React.FC = () => {
  const { id } = useParams<"id">();

  return <div>{`item_id: ${id}`}</div>;
};

export default ItemPage;
