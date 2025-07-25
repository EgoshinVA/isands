import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../types/product.ts';
import { generateMockProducts } from '../../../shared/lib/utils/generateMockProducts.ts';

interface ReplacementModalState {
  isOpen: boolean;
  productToReplace: Product | null;
}

interface ComparisonState {
  products: Product[];
  displayedCount: number;
  showDifferences: boolean;
  isLoading: boolean;
  error: string | null;
  replacementModal: ReplacementModalState;
}

const initialState: ComparisonState = {
  products: [],
  displayedCount: 3,
  showDifferences: false,
  isLoading: false,
  error: null,
  replacementModal: {
    isOpen: false,
    productToReplace: null,
  },
};

export const loadProducts = createAsyncThunk('comparison/loadProducts', async (_, { rejectWithValue }) => {
  try {
    return generateMockProducts();
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Failed to load products');
  }
});

export const comparisonSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
    setDisplayedCount: (state, action: PayloadAction<number>) => {
      state.displayedCount = Math.max(2, Math.min(6, action.payload));
    },
    toggleDifferences: state => {
      state.showDifferences = !state.showDifferences;
    },
    openReplacementModal: (state, action: PayloadAction<Product>) => {
      state.replacementModal = {
        isOpen: true,
        productToReplace: action.payload,
      };
    },
    closeReplacementModal: state => {
      state.replacementModal = {
        isOpen: false,
        productToReplace: null,
      };
    },
    replaceProducts: (state, action: PayloadAction<{ oldId: string; newId: string }>) => {
      const { oldId, newId } = action.payload;
      const oldIndex = state.products.findIndex(p => p.id === oldId);
      const newIndex = state.products.findIndex(p => p.id === newId);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newProducts = [...state.products];
        [newProducts[oldIndex], newProducts[newIndex]] = [newProducts[newIndex], newProducts[oldIndex]];
        state.products = newProducts;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadProducts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
  selectors: {
    selectAllProducts: state => state.products,
    selectDisplayedProducts: state => state.products.slice(0, state.displayedCount),
    selectDisplayedCount: state => state.displayedCount,
    selectShowDifferences: state => state.showDifferences,
    selectReplacementModal: state => state.replacementModal,
  },
});

export const { setDisplayedCount, toggleDifferences, openReplacementModal, closeReplacementModal, replaceProducts } =
  comparisonSlice.actions;

export const {
  selectAllProducts,
  selectDisplayedProducts,
  selectDisplayedCount,
  selectShowDifferences,
  selectReplacementModal,
} = comparisonSlice.selectors;

export const comparisonReducer = comparisonSlice.reducer;
