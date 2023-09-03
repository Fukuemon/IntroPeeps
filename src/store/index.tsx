import create from "zustand";
import type { Database } from "../../utils/database.types";
export type ProfileType = Database["public"]["Tables"]["profiles"]["Row"];
export type SkillType = Database["public"]["Tables"]["skills"]["Row"];
export type SocialLinkType =
  Database["public"]["Tables"]["social_links"]["Row"];

type State = {
  user: ProfileType;
  skills: SkillType[];
  socialLinks: SocialLinkType[];
  setUser: (payload: ProfileType) => void;
  setSkills: (payload: SkillType[]) => void;
  setSocialLinks: (payload: SocialLinkType[]) => void;
};

const useStore = create<State>((set) => ({
  // 初期値
  user: {
    id: "",
    email: "",
    name: "",
    avatar_url: "",
  },
  skills: [],
  socialLinks: [],
  // 更新
  setUser: (payload) => set({ user: payload }),
  setSkills: (payload) => set({ skills: payload }),
  setSocialLinks: (payload) => set({ socialLinks: payload }),
}));

export default useStore;
