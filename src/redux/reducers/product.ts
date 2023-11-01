import { RequestStatus } from "@/interfaces/State";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { AppThunk } from "../store";
import { Cart, Product } from "../types";
import { API } from "@/utility/api/constants";

interface InitialState {
  status: RequestStatus;
  products: Product[];
  cartProducts: Product[];
  categories: any[];
  product?: Product;
}

const initialState: InitialState = {
  status: "nothing",
  products: [],
  categories: [],
  cartProducts: [],
};

const ProductSlice = createSlice({
  name: "Prod",
  initialState,
  reducers: {
    setStatus: (state, { payload }: PayloadAction<RequestStatus>) => {
      state.status = payload;
    },
    fetchAllCategories: (state, action: PayloadAction<Product[]>) => {
      state.categories = action.payload;
    },
    fetchAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    getProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
    fetchCartProducts: (state, action: PayloadAction<Product[]>) => {
      state.cartProducts = action.payload;
    },
  },
});

export const {
  setStatus,
  fetchAllProducts,
  fetchAllCategories,
  fetchCartProducts,
  getProduct,
} = ProductSlice.actions;

export const FetchAllProductsAsync =
  (req: { cat: string }): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    try {
      const res = await axios.get(`${API}products/category/${req.cat}`);
      dispatch(fetchAllProducts(res.data.products));
      dispatch(setStatus("data"));
    } catch (error) {
      dispatch(setStatus("error"));
    }
  };

export const FetchAllCategories = (): AppThunk => async (dispatch) => {
  dispatch(setStatus("loading"));
  try {
    const res = await axios.get(`${API}products/categories`);
    dispatch(fetchAllCategories(res.data));
    dispatch(setStatus("data"));
  } catch (error) {
    dispatch(setStatus("error"));
  }
};

export const GetProductAsync =
  ({ id }: { id: string }): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    try {
      const res = await axios.get(`${API}products/${id}`);
      dispatch(getProduct(res.data));
      dispatch(setStatus("data"));
    } catch (error) {
      dispatch(setStatus("error"));
    }
  };

export const FetchAllMyCartAsync = (): AppThunk => async (dispatch) => {
  dispatch(setStatus("loading"));
  try {
    const res = await axios.get(`${API}carts/user/5`);
    dispatch(fetchCartProducts(res.data.carts[0].products));

    dispatch(setStatus("data"));
  } catch (error) {
    dispatch(setStatus("error"));
  }
};

export const AddToBagAsync =
  ({ id, quantity }: { id: string; quantity: number }): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    try {
      const res = await axios.put<Cart>(`${API}carts/19`, {
        merge: true, // this will include existing products in the cart
        products: [
          {
            id,
            quantity,
          },
        ],
      });
      dispatch(fetchCartProducts(res.data.products));
      dispatch(setStatus("data"));
    } catch (error) {
      dispatch(setStatus("error"));
    }
  };
  

export default ProductSlice;
