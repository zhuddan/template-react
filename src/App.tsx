import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from './components/theme-provider'
import HomePage from '@/pages/HomePage'



export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <TooltipProvider>
        <HomePage />
      </TooltipProvider>
    </ThemeProvider>
  )
}
