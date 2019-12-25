import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Dispatch } from "redux";
import { AppAction } from "../store/actions/actionTypes";
import { fetchCategoriesStart } from "../store/actions/categoryActions";
import { DataState } from "../store/reducers/dataReducer";

interface IProps {
  fetchCategories: () => void;
  data: {};
}

const Category: React.FC<IProps> = ({ fetchCategories, data }) => {
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
const mapState = (state: DataState) => ({
  data: state.data.data
});
const mapDispatch = (dispatch: Dispatch) => ({
  fetchCategories: () => dispatch(fetchCategoriesStart())
});
export default connect(
  mapState,
  mapDispatch
)(Category);
