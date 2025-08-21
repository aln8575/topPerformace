import { NavLink, Link } from 'react-router-dom'
export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="inner container">
        <Link to="/" className="brand">TopPerformace</Link>
        <div className="navlinks">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/inventory">Estoque</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </div>
      </div>
    </nav>
  )
}
