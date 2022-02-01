import {
  ErrorActions,
  LoadingActions,
  RootAction,
  RootState,
  UserActionType,
} from './actionTypes';
import ErrorReducer from './ErrorReducer';
import LoadingReducer from './LoadingReducer';
import ProductsReducer, {
  ProductActionType,
  productsInitialState,
} from './ProductsReducer';
import userReducer from './userReducer';

const initialState = {};

export const RootInitialState = {
  products: productsInitialState,
  user: null,
  error: {},
  loading: {},
};

export default (state: RootState, action: RootAction) => {
  return {
    // user: userReducer(state.user, action as UserActionType),
    products: ProductsReducer(state.products, action as ProductActionType),
    error: ErrorReducer(state.error, action as ErrorActions),
    loading: LoadingReducer(state.loading, action as LoadingActions),
  };
};
