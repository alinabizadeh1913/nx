import { create } from "zustand";

const useStore = create((set) => ({
  isShowSearch: false,
  setIsShowSearch: (isShowSearch: boolean) => set(() => ({ isShowSearch })),
}));

export default useStore;
