import {
  ErrorActions,
  LoadingActions,
  RootAction,
  RootState,
} from './actionTypes';
import ErrorReducer from './ErrorReducer';
import LoadingReducer from './LoadingReducer';
import ProductsReducer, {
  ProductActionType,
  productsInitialState,
} from './ProductsReducer';

const initialState = {};

export const RootInitialState = {
  products: productsInitialState,
  error: {},
  loading: {},
};

export default (state: RootState, action: RootAction) => {
  return {
    products: ProductsReducer(state.products, action as ProductActionType),
    error: ErrorReducer(state.error, action as ErrorActions),
    loading: LoadingReducer(state.loading, action as LoadingActions),
  };
};
