import React from "react";
import { useParams } from "react-router-dom";

const Category: React.FC = props => {
  const { type } = useParams();
  return (
    <div>
      <h1>{type}</h1>
    </div>
  );
};

export default Category;
