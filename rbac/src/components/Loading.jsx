import { useSelector } from "react-redux"

export default function Loading() {
  const { isLoading } = useSelector((state) => state.loading)
  if (!isLoading) {
    return null
  }

  return (
    <div className="mt-5 mb-5 flex items-center justify-center">
      <div className="border-t-4 border-l-4 border-blue-400 rounded-full w-10 h-10 animate-spin"></div>
    </div>
  )
}
