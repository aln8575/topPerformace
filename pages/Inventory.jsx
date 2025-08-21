import { useMemo, useState } from 'react'
import vehicles from '../data/vehicles'
import VehicleCard from '../components/VehicleCard'
import FilterBar from '../components/FilterBar'

export default function Inventory(){
  const [filters, setFilters] = useState({ q:'', brand:'', order:'' })
  const brands = useMemo(()=> Array.from(new Set(vehicles.map(v => v.brand))).sort(), [])

  const filtered = useMemo(() => {
    let list = vehicles.filter(v => 
      (!filters.brand || v.brand === filters.brand) &&
      (!filters.q || (v.model + ' ' + v.brand).toLowerCase().includes(filters.q.toLowerCase()))
    )
    if(filters.order === 'price-asc') list.sort((a,b)=> a.price - b.price)
    if(filters.order === 'price-desc') list.sort((a,b)=> b.price - a.price)
    if(filters.order === 'year-asc') list.sort((a,b)=> a.year - b.year)
    if(filters.order === 'year-desc') list.sort((a,b)=> b.year - a.year)
    return list
  }, [filters])

  return (
    <section className="container">
      <h2 style={{marginBottom:8}}>Estoque</h2>
      <FilterBar filters={filters} setFilters={setFilters} brands={brands} />
      <div className="grid">
        {filtered.map(v => <VehicleCard key={v.id} v={v} />)}
      </div>
    </section>
  )
}
