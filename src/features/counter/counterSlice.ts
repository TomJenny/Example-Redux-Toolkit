// Ducks pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 5,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //increment
    incremented(state) {
      //it;s okay to do this because immer makes it immutable
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    //decrement
    decremented(state) {
      state.value--;
    },
    //reset
  },
});

export const { incremented, decremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
