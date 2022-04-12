import { createStore, combineReducers } from "redux";
import categoryReducer from "./category.reducer"
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
});

export default createStore(rootReducer);