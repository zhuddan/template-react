declare namespace AppNamespace {

  interface AppState {
    count: number
  }

  interface AppActions {
    increase: () => void
    reduce: () => void
  }

  type AppStore = AppState & AppActions

  type AppStoreSetFunction = (set: AppStore) => AppStore | Partial<AppStore>

  interface ListItem {
    cover: string
    title: string
    subtitle: string
    time: string
    id: number
  }
}
