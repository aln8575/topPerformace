import React, { useState } from 'react';
import styled from 'styled-components';

// ========================================================================
// --- STYLED COMPONENTS ---
// ========================================================================

const PageContainer = styled.div`
  padding: 2rem 4rem;
  min-height: 100vh;
  background-color: #0d1117;
  color: #fff;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// --- SEÇÃO SUPERIOR (IMAGEM E DETALHES) ---
const TopSection = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap; /* Permite que os itens quebrem para a linha de baixo em telas pequenas */
  margin-bottom: 4rem;
`;

const ImageContainer = styled.div`
  flex: 1.5; /* Faz a imagem ocupar um pouco mais de espaço */
  min-width: 350px;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
`;

const DetailsContainer = styled.div`
  flex: 1; /* Faz os detalhes ocuparem o espaço restante */
  min-width: 320px;
  background-color: #111827;
  padding: 2rem;
  border-radius: 12px;
`;

// --- OUTROS COMPONENTES DA SEÇÃO SUPERIOR ---
const BackButton = styled.button`
  background: none; border: none; color: #aeb6c1; font-size: 1rem; cursor: pointer; padding: 0; margin-bottom: 1rem;
  &:hover { color: #fff; text-decoration: underline; }
`;
const Price = styled.p`
  font-size: 2.25rem; font-weight: bold; margin: 1rem 0;
`;
const ButtonGroup = styled.div`
  display: flex; gap: 1rem; margin-top: 1.5rem;
`;
const ContactButton = styled.a`
  padding: 0.8rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: bold; text-align: center;
  background-color: ${props => props.primary ? '#059669' : '#4B5563'};
  color: #fff;
  &:hover {
    background-color: ${props => props.primary ? '#047857' : '#6B7280'};
  }
`;

// --- SEÇÃO DA GALERIA ---
const GallerySection = styled.section`
  /* Estilos da galeria permanecem os mesmos */
  margin-top: 2rem; width: 100%;
`;
const MainImageWrapper = styled.div`
  position: relative; overflow: hidden; border-radius: 12px; background-color: #111827; margin-bottom: 1rem;
`;
const GalleryMainImage = styled.img`
  width: 100%; max-height: 600px; object-fit: cover; display: block; border-radius: 12px;
`;
const Description = styled.p`
  text-align: center; color: #aeb6c1; min-height: 24px; font-style: italic;
`;
const ThumbnailContainer = styled.div`
  display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;
`;
const Thumbnail = styled.img`
  width: 120px; height: 75px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 3px solid transparent; opacity: 0.6;
  transition: all 0.3s ease;
  ${({ active }) => active && `border-color: #059669; opacity: 1; transform: scale(1.05);`}
  &:hover { opacity: 1; }
`;
const NavButton = styled.button`
  position: absolute; top: 50%; transform: translateY(-50%); background-color: rgba(0, 0, 0, 0.4);
  color: white; border: none; font-size: 2rem; cursor: pointer; padding: 0.5rem 1rem; z-index: 10; border-radius: 8px;
  ${({ direction }) => (direction === 'prev' ? 'left: 10px;' : 'right: 10px;')}
  &:hover { background-color: rgba(0, 0, 0, 0.7); }
`;

// ========================================================================
// --- COMPONENTE PRINCIPAL ---
// ========================================================================
export default function VehicleDetails() {
  const galleryImages = [
    { src: '/images/altis.jpg', description: 'Vista frontal e lateral do veículo' },
    { src: '/images/motorCorola.jpg', description: 'Motor 1.8 Hybrid com transmissão automática' },
    { src: '/images/creta.jpg', description: 'Painel e interior do veículo' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => setCurrentIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  const goToImage = index => setCurrentIndex(index);

  return (
    <PageContainer>
      {/* --- SEÇÃO SUPERIOR: IMAGEM E DETALHES LADO A LADO --- */}
      <TopSection>
        {/* Coluna da Imagem */}
        <ImageContainer>
          <MainImage src='/images/altis.jpg' alt="Toyota Corolla Altis Hybrid" />
        </ImageContainer>
        
        {/* Coluna dos Detalhes */}
        <DetailsContainer>
          <BackButton onClick={() => window.history.back()}>&larr; Voltar</BackButton>
          <h1>Toyota Corolla Altis Hybrid</h1>
          <p>2023 • 21.000 Km • Flex • Automático</p>
          <Price>R$ 175.000,00</Price>
          <p>Descrição breve do veículo. Personalize este texto para incluir opcionais, revisão, laudo cautelar etc.</p>
          <ButtonGroup>
            <ContactButton primary href="https://wa.me/seunumerowhatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</ContactButton>
            <ContactButton href="mailto:contato@exemplo.com">Enviar e-mail</ContactButton>
          </ButtonGroup>
        </DetailsContainer>
      </TopSection>

      {/* --- SEÇÃO DA GALERIA INTERATIVA --- */}
      <GallerySection>
        <h2>Galeria de imagens</h2>
        <MainImageWrapper>
          <NavButton direction="prev" onClick={goToPrevious}>&#10094;</NavButton>
          <GalleryMainImage key={currentIndex} src={galleryImages[currentIndex].src} alt={galleryImages[currentIndex].description} />
          <NavButton direction="next" onClick={goToNext}>&#10095;</NavButton>
        </MainImageWrapper>
        <Description>{galleryImages[currentIndex].description}</Description>
        <ThumbnailContainer>
          {galleryImages.map((image, index) => (
            <Thumbnail key={index} src={image.src} alt={`Miniatura ${index + 1}`} onClick={() => goToImage(index)} active={index === currentIndex} />
          ))}
        </ThumbnailContainer>
      </GallerySection>
    </PageContainer>
  );
}