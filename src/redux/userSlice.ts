import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  hasUnsavedChanges: boolean;
}

const getInitialUser = (): UserState => {
  const savedUser = localStorage.getItem("user");
  return savedUser
    ? { ...JSON.parse(savedUser), hasUnsavedChanges: false }
    : {
        id: `USR-${Math.random().toString(36).substring(2, 8)}`,
        name: "",
        address: "",
        email: "",
        phone: "",
        hasUnsavedChanges: false,
      };
};

const initialState: UserState = getInitialUser();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      Object.assign(state, action.payload);
      state.hasUnsavedChanges = true;
    },
    saveUser: (state) => {
      localStorage.setItem("user", JSON.stringify(state));
      state.hasUnsavedChanges = false;
    },
  },
});

export const { setUser, saveUser } = userSlice.actions;
export default userSlice.reducer;
