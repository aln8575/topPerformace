export default function Contact(){
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <h2>Entre em Contato</h2>
        <p>Fale conosco pelo WhatsApp ou envie sua mensagem. 
           Nossa equipe está pronta para te atender!</p>

        <div className="contact-actions">
          <a 
            className="btn-whatsapp" 
            href="https://wa.me/558591950861?text=Olá! Tenho interesse." 
            target="_blank" 
            rel="noreferrer"
          >
            💬 Falar no WhatsApp
          </a>

          <a 
            className="btn-email" 
            href="mailto:contato@suaempresa.com"
          >
            📧 Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  )
}
