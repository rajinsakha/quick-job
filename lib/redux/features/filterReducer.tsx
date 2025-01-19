import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface JobCategory {
  name: string;
  count: number;
  subcategories: { [key: string]: number };
}

export interface JobFilters {
  categories: string[];
  employmentTypes: string[];
  seniority: string;
  language: string;
}

const initialState: JobFilters = {
  categories: [],
  employmentTypes: [],
  seniority: "",
  language: "",
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
    setSeniority: (state, action: PayloadAction<string>) => {
      state.seniority = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setCategories, setEmploymentTypes, setSeniority, setLanguage } =
  filters.actions;
export default filters.reducer;
