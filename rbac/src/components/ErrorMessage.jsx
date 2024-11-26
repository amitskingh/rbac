import { useSelector } from "react-redux"

export default function ErrorMessage() {
  const { error } = useSelector((state) => state.error)

  return <div className="justify-self-center text-red-500">{error}</div>
}
