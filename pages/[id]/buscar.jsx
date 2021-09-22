import { useRouter } from 'next/router'

export default function Buscar() {
  const router = useRouter()
  const codigo = router.query.id
  return (
    <div>
      <h1>Buscar {codigo}</h1>
    </div>
  )
}
