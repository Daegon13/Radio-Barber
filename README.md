# Radio Barber – Mercedes (Demo)

Demo web mobile-first orientada a conversión por WhatsApp.

## Requisitos
- Node.js 18+

## Instalar y correr
```bash
npm install
npm run dev
```
Build/preview:
```bash
npm run build
npm run preview
```

## Cambios rápidos (sin tocar todo)
Editar `src/config/site.ts`:
- Nombre, dirección, ciudad, apertura
- WhatsApp en formato internacional SIN "+" (solo números)

Imágenes:
- Reemplazá `public/images/hero.jpg` y `g1.jpg..g6.jpg` manteniendo los nombres.

Horarios:
- `src/components/Hours.astro`

Servicios:
- `src/components/Services.astro`

Reseñas:
- `src/components/Reviews.astro`

FAQ:
- `src/components/FAQ.astro`


## Imágenes del anuncio
Reemplazá las 6 fotos de la galería en:
- `public/images/gallery/01.jpg` ... `06.jpg`

Logo del cliente:
- `public/images/logo-radio-barber.jpg`

Favicon:
- `public/favicon.png` / `public/favicon.ico`
