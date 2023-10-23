import { create } from 'zustand';

export interface productItem {
  _id: string;
  title: string;
  description: string;
  stars: number;
  starsCount: number;
  price: number;
  picture: string;
  fullDescription: string;
  availableSizes: string[];
}

interface productStore {
  products: productItem[];
  updateProductData: (productData: productItem[]) => void;
}
const useProductStore = create<productStore>((set) => ({
  products: [],
  updateProductData: (productData: productItem[]) => {
    set((state) => ({
      ...state,
      products: [...productData],
    }));
  },
}));

export default useProductStore;
