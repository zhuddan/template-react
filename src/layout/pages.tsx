export default function Page({ children }: React.PropsWithChildren) {
  return <div className="container h-full flex flex-col items-center justify-center">{children}</div>
}
