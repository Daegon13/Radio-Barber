export const site = {
  businessName: "Radio Barber – Mercedes",
  shortName: "Radio Barber",
  city: "Mercedes, Uruguay",
  addressLine: "Tomás Gómez 299",
  openingNote: "Apertura en junio",
  bookingNote: "Reservas pronto",

  // Importante: sin "/" adelante (para que funcione con BASE_URL)
  logoPath: "images/logo-radio-barber.jpg",
  heroImagePath: "images/hero.png",

  // Usar las imágenes que ya están en public/images
  gallery: [
    { src: "images/g1.jpg", alt: "Corte clásico (foto del anuncio)" },
    { src: "images/g2.jpg", alt: "Degradé prolijo (foto del anuncio)" },
    { src: "images/g3.jpg", alt: "Detalle tijera y peine (foto del anuncio)" },
    { src: "images/g4.jpg", alt: "Ambiente barbería (foto del anuncio)" },
    { src: "images/g5.jpg", alt: "Terminación y contornos (foto del anuncio)" },
    { src: "images/g6.jpg", alt: "Estilo clásico moderno (foto del anuncio)" }
  ],

  whatsappNumber: "59892360039",

  instagramHandle: "@radiobarber.mercedes",
  facebookHandle: "Radio Barber"
};

export function waLink(message: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}

export function mapsLink() {
  const q = encodeURIComponent(`${site.addressLine}, ${site.city}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

