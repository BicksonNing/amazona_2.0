import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const id = action.payload.id;

      const index = state.items.findIndex((basketItem) => basketItem.id === id);

      let newBasket = [...state.items];

      if (index >= 0) {
        //Item exist in basket... remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${id})  as it's not on the cart`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
