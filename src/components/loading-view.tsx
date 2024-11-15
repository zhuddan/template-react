import ReactLoading from 'react-loading'

export default function LoadingView() {
  return (
    <div
      className="w-full h-52 flex items-center justify-center flex-col"
      style={{
        height: 'var(--content-height)',
      }}
    >
      <ReactLoading
        color="#087ea4"
        type="spin"
      />
      <p className="mt-4 font-bold text-primary">Loading...</p>
    </div>
  )
}
