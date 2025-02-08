import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface JobCategory {
  name: string;
  count: number;
  subcategories: { [key: string]: number };

}

export interface JobFilters {
  categories: string[];
  employmentTypes: string[];
 
  refetchDropdown: boolean

}

const initialState: JobFilters = {
  categories: [],
  employmentTypes: [],
  refetchDropdown: false
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setEmploymentTypes: (state, action: PayloadAction<string[]>) => {
      state.employmentTypes = action.payload;
    },
    toggleRefetchDropdown: (state) => {
      state.refetchDropdown = !state.refetchDropdown;
    },
  },
});

export const { setCategories, setEmploymentTypes, toggleRefetchDropdown } =
  filters.actions;
export default filters.reducer;
