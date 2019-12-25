import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Category: React.FC = props => {
  const { type } = useParams();
  if (type === "Index") {
    return <h1>Index for category</h1>;
  }
  return (
    <div>
      <h1>{type}</h1>
    </div>
  );
};

export default Category;
