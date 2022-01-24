import create from "zustand";

interface UiStore {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;

  showFsMenu: boolean;
  openFsMenu: () => void;
  closeFsMenu: () => void;
}

const useUiStore = create<UiStore>((set, get) => ({
  isMobile: window.innerWidth <= 600,
  setIsMobile: (value) => set({ isMobile: value }),

  showFsMenu: false,
  openFsMenu: () => {
    if (!get().isMobile) return;
    set({ showFsMenu: true });
  },
  closeFsMenu: () => set({ showFsMenu: false }),
}));

export default useUiStore;
