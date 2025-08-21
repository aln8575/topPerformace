const vehicles = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Corolla Altis Hybrid',
    year: 2023,
    km: 21000,
    fuel: 'Flex',
    transmission: 'Automático',
    price: 175000,
    image: '/images/altis.jpg',   // pega direto do public/images
    images: [
      '/images/altis.jpg',
      '/images/motorCorola.jpg',
      '/images/creta.jpg'
    ]
  },
  {
    id: '2',
    brand: 'Jeep',
    model: 'Compass Longitude',
    year: 2021,
    km: 35000,
    fuel: 'Flex',
    transmission: 'Automático',
    price: 129990,
    image: '/images/compass.jpg',
    images: [
      '/images/compass.jpg'
    ]
  },
  {
    id: '3',
    brand: 'Yamaha',
    model: 'MT-07 ABS',
    year: 2020,
    km: 12000,
    fuel: 'Gasolina',
    transmission: 'Manual',
    price: 38990,
    image: '/images/mt07.jpg',
    images: [
      '/images/mt07.jpg'
    ]
  },
  {
    id: '4',
    brand: 'Hyundai',
    model: 'Creta N-Line',
    year: 2022,
    km: 12000,
    fuel: 'Flex',
    transmission: 'Automático',
    price: 135000,
    image: '/images/creta.jpg',
    images: [
      '/images/creta.jpg'
    ]
  }
]

export default vehicles
