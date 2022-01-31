import React from "react";
import { useParams } from "react-router-dom";

const ListPage: React.FC = () => {
  const id = useParams<"id">();

  return <div>{`list_id: ${id.id}`}</div>;
};

export default ListPage;
