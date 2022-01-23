import create from "zustand";

interface UiStore {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}

const useUiStore = create<UiStore>((set, get) => ({
  isMobile: window.innerWidth <= 600,
  setIsMobile: (value) => set({ isMobile: value }),
}));

export default useUiStore;
