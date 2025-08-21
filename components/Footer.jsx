import "../footer.css";
// import logo from '../assets/LogoFooter.png';


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Barra vermelha superior */}
      <div className="footer-top">
        <p>
          Nossos canais de atendimento são 100% digitais. Precisa de ajuda?{" "}
          <a href="#">CLIQUE AQUI</a>
        </p>
      </div>

      {/* Conteúdo principal */}
      <div className="footer-content">
        {/* Coluna 1 */}
        <div className="footer-column">
          <h3>Comprar</h3>
          <ul>
            <li><a href="#">Carros usados</a></li>
            <li><a href="#">Carros novos</a></li>
            <li><a href="#">Motos usadas</a></li>
            <li><a href="#">Motos novas</a></li>
            <li><a href="#">Vistoriado</a></li>
          </ul>

          <h3>Vender</h3>
          <ul>
            <li><a href="#">Vender carro</a></li>
            <li><a href="#">Vender moto</a></li>
            <li><a href="#">Gerenciar meu anúncio</a></li>
            <li><a href="#">Plataforma revendedores</a></li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div className="footer-column">
          <h3>Serviços</h3>
          <ul>
            <li><a href="#">Serviços automotivos</a></li>
            <li><a href="#">Tabela FIPE e Tabela Webmotors</a></li>
            <li><a href="#">Financiamento</a></li>
            <li><a href="#">Consórcio</a></li>
            <li><a href="#">Catálogo 0km</a></li>
            <li><a href="#">Vistoriado</a></li>
            <li><a href="#">Plataforma revendedores</a></li>
            <li><a href="#">Seguro veículo</a></li>
            <li><a href="#">Webmotors Ads</a></li>
            <li><a href="#">Comparar veículos</a></li>
            <li><a href="#">Multas e Débitos</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="footer-column">
          <h3>Notícias WM1</h3>
          <ul>
            <li><a href="#">Portal</a></li>
            <li><a href="#">Últimas notícias</a></li>
            <li><a href="#">Testes</a></li>
            <li><a href="#">Comparativos</a></li>
            <li><a href="#">Vídeos</a></li>
            <li><a href="#">Motos</a></li>
            <li><a href="#">Segredos</a></li>
            <li><a href="#">Dicas</a></li>
            <li><a href="#">Bolso</a></li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div className="footer-column">
          <h3>Ajuda</h3>
          <ul>
            <li><a href="#">Para você</a></li>
            <li><a href="#">Para a sua loja</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Trabalhe com a gente</a></li>
            <li><a href="#">Mapa do site</a></li>
          </ul>
        </div>

        {/* Coluna 5 */}
        <div className="footer-column">
          <h3>Institucional</h3>
          <ul>
            <li><a href="#">Canal de Denúncias</a></li>
            <li><a href="#">Código de conduta Webmotors</a></li>
            <li><a href="#">Código de Conduta Fornecedores</a></li>
            <li><a href="#">Código defesa do consumidor</a></li>
            <li><a href="#">Gerenciamento de cookies</a></li>
            <li><a href="#">Termos de Uso e Política de privacidade</a></li>
            <li><a href="#">LGPD</a></li>
            <li><a href="#">Cartilha LGPD</a></li>
            <li><a href="#">Relatório de Transparência</a></li>
          </ul>
        </div>
      </div>

      {/* Barra vermelha inferior */}
      {/* <div className="footerLogo">
        <p>
          <img src={logo} alt="Logo da Empresa" className="footerLogo" />
          | Uma empresa Comprometida
        </p>
      </div> */}

      <section>
        <div className="footer-direitosAutoriais">
          <p>© {year} AutoStore. Todos os direitos reservados.</p>
        </div>
      </section>

    </footer>
  );
}
