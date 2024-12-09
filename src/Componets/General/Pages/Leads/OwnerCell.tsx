
interface OwnerCellProps {
    id: number
}
export default function OwnerCell({id}:OwnerCellProps) {
  return (
    <div>{id}</div>
  )
}
