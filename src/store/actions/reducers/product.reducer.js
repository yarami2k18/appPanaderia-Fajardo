import {PRODUCTS} from '../../../constants/products';
import { productTypes } from '../../actions/types/product.types';
const {SELECT_PRODUCT, FILTERED_PRODUCTS} = productTypes;

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selectedProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: state.products.find(
          product => product.id === action.productId,
        )
      };
      
      
    case FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          products => products.category === action.categoryId,
        )
      }
    default: 
      return {
        ...state,
      }
  }
}

export default productReducer;
