export const site = {
  businessName: "Radio Barber – Mercedes",
  shortName: "Radio Barber",
  city: "Mercedes, Uruguay",
  addressLine: "Tomás Gómez 299",
  openingNote: "Apertura en junio",
  bookingNote: "Reservas pronto",

  // Branding / imágenes
  logoPath: "/images/logo-radio-barber.jpg",
  heroImagePath: "/images/hero.jpg",

  // Galería (reemplazá estas imágenes por las del anuncio, manteniendo nombres)
  gallery: [
    { src: "/images/gallery/01.jpg", alt: "Corte clásico (foto del anuncio)" },
    { src: "/images/gallery/02.jpg", alt: "Degradé prolijo (foto del anuncio)" },
    { src: "/images/gallery/03.jpg", alt: "Detalle tijera y peine (foto del anuncio)" },
    { src: "/images/gallery/04.jpg", alt: "Ambiente barbería (foto del anuncio)" },
    { src: "/images/gallery/05.jpg", alt: "Terminación y contornos (foto del anuncio)" },
    { src: "/images/gallery/06.jpg", alt: "Estilo clásico moderno (foto del anuncio)" }
  ],

  // Reemplazar por el número real en formato internacional SIN "+"
  // Ejemplo Uruguay: 5989XXXXXXX
  whatsappNumber: "598092360039",

  // Placeholders
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
