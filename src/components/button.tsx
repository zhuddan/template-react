export default function Button({ children, className, onClick }:
React.PropsWithChildren<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}>) {
  return (
    <button onClick={onClick} className={`shadow rounded bg-primary px-4 py-2 text-white ${className}`}>
      {children}
    </button>
  )
}
