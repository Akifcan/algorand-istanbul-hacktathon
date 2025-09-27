import { create } from 'zustand'

type UserState = {
  user?: UserProps
  setUser: (user: UserProps) => void
}

const useUserStore = create<UserState>()((set) => ({
  user: undefined,
  setUser: (user: UserProps) => set(() => ({ user })),
}))

export default useUserStore