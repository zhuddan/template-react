import { createContext, useMemo, useState } from 'react'

interface IAppContext {
  count: number
  setCount: (count: number) => void
}

export const AppContext = createContext<IAppContext>({} as IAppContext)

export function Provider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  const value = useMemo<IAppContext>(() => ({
    count,
    setCount,
  }), [count, setCount])
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
