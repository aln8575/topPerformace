import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <section className="container">
      <h2>Página não encontrada</h2>
      <Link className="btn" to="/">Voltar ao início</Link>
    </section>
  )
}
