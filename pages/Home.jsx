import { Link } from 'react-router-dom'

export default function Home() {
  const featuredCars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Corolla Altis Hybrid",
      year: 2023,
      price: "R$ 175.000",
      image: "/images/altis.jpg" // substitua pelo caminho correto da imagem
    },
    {
      id: 2,
      brand: "Jeep",
      model: "Compass Longitude",
      year: 2022,
      price: "R$ 165.000",
      image: "/images/compass.jpg" // substitua pelo caminho correto da imagem
    },
    {
      id: 3,
      brand: "Hyundai",
      model: "Creta N-Line",
      year: 2023,
      price: "R$ 145.000",
      image: "/images/creta.jpg" // substitua pelo caminho correto da imagem
    }
  ]

  return (
    <>
      {/* Seção Hero */}
      <section className="hero container">
        <div>
          <p className="pill">Bem-vindo à TopPerformance</p>
          <h1>Encontre seu próximo <span style={{ color: 'var(--primary)' }}>veículo</span> com facilidade</h1>
          <p>Conosco seus sonhos se tornam realidade</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
            <Link to="/inventory" className="btn">Ver estoque</Link>
            <Link to="/contact" className="btn secondary">Falar no WhatsApp</Link>
          </div>
        </div>
        <img
          src="/images/banner.png"
          alt="car hero"
          style={{ width: '100%', borderRadius: 16 }}
        />
      </section>

      {/* Seção Carros em Destaque */}
      <section className="highlights container" style={{ marginTop: 60 }}>
        <h2 style={{ marginBottom: 20 }}>Carros em Destaque</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {featuredCars.map((car) => (
            <div key={car.id} style={{
              background: 'rgb(16 15 41)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img src={car.image} alt={car.model} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px', flex: '1' }}>
                <h3>{car.brand} {car.model}</h3>
                <p>{car.year} - <strong>{car.price}</strong></p>
              </div>
              <div style={{ padding: '15px' }}>
                <Link to="/inventory" className="btn" style={{ width: '100%', textAlign: 'center' }}>Ver detalhes</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="localizacao" style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#111827", color: "#fff" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>📍 Nossa Localização</h2>
        <p style={{ marginBottom: "20px" }}>
          Venha nos visitar em nossa loja física e confira de perto os veículos disponíveis.
        </p>

        {/* Container do mapa */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", borderRadius: "12px", overflow: "hidden", height: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.347106430803!2d-38.503387!3d-3.730451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7490abcf3c4c5%3A0x1234567890abcdef!2sSua%20Loja%20Aqui!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </>
  )
}
