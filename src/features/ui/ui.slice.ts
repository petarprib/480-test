import { createSlice, type PayloadAction, type Slice } from '@reduxjs/toolkit';

type UIState = {
  isSidebarOpen: boolean;
};

const initialState: UIState = {
  isSidebarOpen: false,
};

export const uiSlice: Slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setIsSidebarOpen } = uiSlice.actions;
export default uiSlice.reducer;
