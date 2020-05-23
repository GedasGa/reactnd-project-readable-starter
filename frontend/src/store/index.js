import { combineReducers } from "redux";
import posts from "../reducers/posts";
import categories from "../reducers/categories";
import comments from "../reducers/comments";

const combinedReducers = combineReducers({
    categories,
    posts,
    comments,
})

export default combinedReducers;