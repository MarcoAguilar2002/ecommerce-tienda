import { create } from 'zustand'

interface State {
    isSideMenuShopOpen: boolean
    openSideShopMenu: () => void
    closeSideShopMenu: () => void
}

export const useShop = create<State>()((set) => ({
    isSideMenuShopOpen: false,

    openSideShopMenu: () => set({ isSideMenuShopOpen: true }),
    closeSideShopMenu: () => set({ isSideMenuShopOpen: false })
}))