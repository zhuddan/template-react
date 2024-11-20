import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// persist

export const useAppStore = create<AppNamespace.AppStore>()(
  devtools(
    // persist(
    (set, get) => ({
      count: 0,
      increase: () => {
        set(state => ({
          count: state.count + 1,
        }))
      },
      reduce: () => {
        set({
          count: get().count - 1,
        })
      },
    }),
    // { name: 'appstore' },
    // ),
  ),
)
