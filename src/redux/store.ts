// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import authReducer, { setUser } from "./authSlice";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

// Listen to Firebase Auth State and update Redux store
onAuthStateChanged(auth, (user) => {
  store.dispatch(setUser(user ? user : null));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
