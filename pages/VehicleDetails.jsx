import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import vehicles from '../data/vehicles'; // ajuste o caminho se estiver diferente

// ========================================================================
// --- STYLED COMPONENTS (mantidos iguais ao seu código atual) ---
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

const TopSection = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const ImageContainer = styled.div`
  flex: 1.5;
  min-width: 350px;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
`;

const DetailsContainer = styled.div`
  flex: 1;
  min-width: 320px;
  background-color: #111827;
  padding: 2rem;
  border-radius: 12px;
`;

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

const GallerySection = styled.section`
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
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === id);

  // Caso não encontre o veículo
  if (!vehicle) {
    return (
      <PageContainer>
        <h2>Veículo não encontrado</h2>
        <BackButton onClick={() => window.history.back()}>&larr; Voltar</BackButton>
      </PageContainer>
    );
  }

  const galleryImages = vehicle.images?.map(img => ({
    src: img,
    description: `${vehicle.brand} ${vehicle.model}`
  })) || [{ src: vehicle.image, description: `${vehicle.brand} ${vehicle.model}` }];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => setCurrentIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  const goToImage = index => setCurrentIndex(index);

   // Mensagem automática
  const message = `Olá! Tenho interesse no ${vehicle.model}`;

  // Monta o link com encode
  const whatsappLink = `https://wa.me/${558591950861}?text=${encodeURIComponent(message)}`;

  return (
    <PageContainer>
      {/* --- SEÇÃO SUPERIOR --- */}
      <TopSection>
        <ImageContainer>
          <MainImage src={galleryImages[0].src} alt={`${vehicle.brand} ${vehicle.model}`} />
        </ImageContainer>

        <DetailsContainer>
          <BackButton onClick={() => window.history.back()}>&larr; Voltar</BackButton>
          <h1>{vehicle.brand} {vehicle.model}</h1>
          <p>{vehicle.year} • {vehicle.km.toLocaleString('pt-BR')} Km • {vehicle.fuel} • {vehicle.transmission}</p>
          <Price>{vehicle.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
          <p>{vehicle.description}</p>
          <ButtonGroup>
            <ContactButton primary href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</ContactButton>
            <ContactButton href="mailto:contato@exemplo.com">Enviar e-mail</ContactButton>
          </ButtonGroup>
        </DetailsContainer>
      </TopSection>

      {/* --- GALERIA --- */}
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
            <Thumbnail
              key={index}
              src={image.src}
              alt={`Miniatura ${index + 1}`}
              onClick={() => goToImage(index)}
              active={index === currentIndex}
            />
          ))}
        </ThumbnailContainer>
      </GallerySection>
    </PageContainer>
  );
}
