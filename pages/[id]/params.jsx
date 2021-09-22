import { useRouter } from 'next/router'

export default function Params() {
  const router = useRouter()
  const codigo = router.query.id
  const nome = router.query.nome
  return (
    <div>
      <h1>Buscar {codigo} e {nome}</h1>
    </div>
  )
}