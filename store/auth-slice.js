export const createAuthSlice = (set) => ({
  user: false,
  token: undefined,
  setUserInfo: (user) => set({ user }),
  setToken: (token) => set({ token }),
});
