export const createAuthSlice = (set) => ({
  user: undefined,
  token: undefined,
  setUserInfo: (user) => set({ user }),
  setToken: (token) => set({ token }),
});
