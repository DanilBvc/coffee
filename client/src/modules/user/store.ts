import { create } from 'zustand';

interface userData {
  userName: string;
  mail: string;
  avatar: string;
  orders: string[];
  favorite: string[];
}
interface userStore extends userData {
  updateUserData: (userData: userData) => void;
}
const useUserStore = create<userStore>((set) => ({
  userName: '',
  mail: '',
  avatar: '',
  orders: [],
  favorite: [],
  updateUserData: (userData: userData) => {
    set({
      ...userData,
    });
  },
}));

export default useUserStore;
