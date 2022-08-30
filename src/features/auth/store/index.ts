import create from "zustand";

type IAuthModalStore = {
  open: boolean;
  display: "login" | "register" | "forgot-password" | "reset-password";
  handleOpen: (open: boolean) => void;
  handleDisplay: (display: IAuthModalStore["display"]) => void;
};

export const useAuthModalStore = create<IAuthModalStore>((set) => ({
  open: false,
  handleOpen: (open) => set((state) => ({ ...state, open })),

  display: "login",
  handleDisplay: (display) => set((state) => ({ ...state, display })),
}));
