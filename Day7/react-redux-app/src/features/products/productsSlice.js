// // import { createSlice } from "@reduxjs/toolkit";

// // const productsState = { items: [
// //     {
// //       "id": "1",
// //       "name": "Item One",
// //       "description": "Gadget",
// //       "status": "Available"
// //     },
// //     {
// //       "id": "2",
// //       "name": "Item Two",
// //       "description": "Widget",
// //       "status": "Available"
// //     }
// // ] };

// // export const productsSlice = createSlice({
// //     name: 'products',
// //     initialState: productsState,
// // });

// // export default productsSlice.reducer;

// // ----------------------------------------------------

// import { createSlice } from "@reduxjs/toolkit";
// import productAPIClient from "../../services/products-api-client";

// const productsState = { items: [] };

// export const productsSlice = createSlice({
//   name: 'products',
//   initialState: productsState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.items = action.payload;
//     }
//   }
// });

// const { setProducts } = productsSlice.actions;

// export const fetchProducts = function () {
//   return async function (dispatch) {
//     const products = await productAPIClient.getAllProducts();
//     dispatch(setProducts(products));
//   }
// }

// export default productsSlice.reducer;

// ----------------------------------------------------

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPIClient from "../../services/products-api-client";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    return await productAPIClient.getAllProducts();
  } catch (error) {
    return rejectWithValue(error.message || 'An error occurred');
  }
});

export const insertProduct = createAsyncThunk("products/insertProduct", async (product, { rejectWithValue }) => {
  try {
    return await productAPIClient.insertProduct(product);
  } catch (error) {
    return rejectWithValue(error.message || 'Error occurred while adding product');
  }
});

export const updateProduct = createAsyncThunk("products/updateProduct", async (product, { rejectWithValue }) => {
  try {
    return await productAPIClient.updateProduct(product);
  } catch (error) {
    return rejectWithValue(error.message || 'Error occurred while updating product');
  }
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId, { rejectWithValue }) => {
  try {
    return await productAPIClient.deleteProduct({ id: productId });
  } catch (error) {
    return rejectWithValue(error.message || 'Error occurred while deleting product');
  }
});

const productsState = {
  items: [],
  status: 'idle',
  error: null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(insertProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const { id, ...updatedProduct } = action.payload;
        const existingProduct = state.items.find(product => product.id === id);
        if (existingProduct) {
          Object.assign(existingProduct, updatedProduct);
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.items = state.items.filter(product => product.id !== id);
      })
  }
});

export default productsSlice.reducer;