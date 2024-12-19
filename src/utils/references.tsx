export interface Reference {
  to: string
  title: React.ReactNode
  href: string
}

export default [
  {
    to: '/libs/zustand',
    title: '🐻 zustand',
    href: 'https://github.com/pmndrs/zustand',
  },
  {
    to: '/libs/react-query',
    title: (
      <span className="inline-flex items-center hover:text-primary hover:underline">
        <img src="https://avatars.githubusercontent.com/u/72518640?s=48&v=4" alt="avatar" className="size-4 rounded-sm mr-1 block " />
        react-query
      </span>
    ),
    href: 'https://github.com/TanStack/query',
  },
] satisfies Reference[]
