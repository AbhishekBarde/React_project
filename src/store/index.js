
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authslice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
    reducer: {
      auth: authSlice.reducer
    },
  });
  

  export const authActions = authSlice.actions;
  
  export default store;
  
