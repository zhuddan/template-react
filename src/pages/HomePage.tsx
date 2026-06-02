import { useTheme } from '@/components/theme-provider'
import { Switch } from '@/components/ui/switch'
export default function HomePage() {
  const { setTheme, theme } = useTheme()



  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={(e) => {setTheme(e ? 'dark' : 'light')}}
      />
    </div>
  )
}
