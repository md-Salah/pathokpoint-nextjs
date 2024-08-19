import { Author, Book, Category } from '@/interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  focus: boolean;
  loading: boolean;
  query: string;
  tab: "book" | "author" | "category";
  books: Book[];
  authors: Author[];
  categories: Category[];
}

const initialState: InitialState = {
  focus: false,
  loading: false,
  query: "",
  tab: "book",
  books: [],
  authors: [],
  categories: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFocus: (state, action: PayloadAction<boolean>) => {
      state.focus = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    setAuthors: (state, action: PayloadAction<Author[]>) => {
      state.authors = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTab: (state, action: PayloadAction<"book" | "author" | "category">) => {
      state.tab = action.payload;
    },
  },
});

export const {
  setFocus,
  setQuery,
  setBooks,
  setAuthors,
  setCategories,
  setLoading,
  setTab,
} = searchSlice.actions;
export default searchSlice.reducer;
