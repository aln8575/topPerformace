export default function FilterBar({ filters, setFilters, brands }){
  function update(key, value){
    setFilters(prev => ({...prev, [key]: value}))
  }
  return (
    <div className="filters">
      <input placeholder="Buscar modelo..." value={filters.q} onChange={e=>update('q', e.target.value)} />
      <select value={filters.brand} onChange={e=>update('brand', e.target.value)}>
        <option value="">Todas as marcas</option>
        {brands.map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <select value={filters.order} onChange={e=>update('order', e.target.value)}>
        <option value="">Ordenar</option>
        <option value="price-asc">Preço: menor→maior</option>
        <option value="price-desc">Preço: maior→menor</option>
        <option value="year-desc">Ano: mais novo</option>
        <option value="year-asc">Ano: mais antigo</option>
      </select>
    </div>
  )
}
