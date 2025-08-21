import { Link } from 'react-router-dom'
export default function VehicleCard({ v }){
  return (
    <article className="card">
      <img src={v.image} alt={v.model} loading="lazy" />
      <div className="card-body">
        <div className="row">
          <h3 className="title">{v.brand} {v.model}</h3>
          <span className="pill">{v.year}</span>
        </div>
        <p className="muted">{v.km.toLocaleString('pt-BR')} km • {v.fuel} • {v.transmission}</p>
        <div className="row">
          <span className="price">{v.price.toLocaleString('pt-BR', { style:'currency', currency:'BRL'})}</span>
          <Link to={`/vehicle/${v.id}`} className="btn">Ver detalhes</Link>
        </div>
      </div>
    </article>
  )
}
