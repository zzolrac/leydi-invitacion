# Invitación de Boda · Mariana & Daniel

Landing page de invitación de boda, mobile-first, con diseño artesanal estilo tarjeta formal.

## Secciones

1. **Portada** — sobre con sello de cera, nombres en caligrafía, fecha y ciudad
2. **Verso** — Proverbios 18:22 con comillas ornamentales
3. **Foto** — foto de la pareja en marco en arco
4. **Fecha y cuenta regresiva** — countdown automático
5. **Ceremonia y Recepción** — con botón "Ver ubicación" (detecta Apple Maps en iOS / Google Maps en Android)
6. **Itinerario** — línea de tiempo con horarios
7. **Etiqueta** — código de vestimenta y paleta de colores
8. **Regalos** — lluvia de sobres / transferencia
9. **RSVP** — botones de WhatsApp para la novia y el novio
10. **Cierre** — agradecimiento

## Estructura

```
├── index.html          # Invitación completa
├── styles.css          # Estilos responsive mobile-first
├── script.js           # Countdown, mapas (iOS/Android), animaciones
├── netlify.toml        # Configuración de Netlify
├── _redirects          # Redirecciones Netlify
└── img/                # Imágenes y decoraciones SVG
    ├── guirnalda.svg   # Guirnalda floral acuarela
    ├── flor-esquina.svg# Arreglo floral de esquina
    ├── divisor.svg     # Divisor ornamental dorado
    ├── marco-arco.svg  # Marco en arco para foto
    ├── arrayan.svg     # Rama de arrayán
    └── foto-pareja.jpg # Foto de la pareja
```

## URLs

- **Demo (Netlify):** https://leydi-invitacion.netlify.app
- **Repositorio (GitHub):** https://github.com/zzolrac/leydi-invitacion
- **Admin Netlify:** https://app.netlify.com/projects/leydi-invitacion

## Despliegue

```bash
# GitHub
git add . && git commit -m "cambios" && git push

# Netlify (producción)
netlify deploy --prod --dir .
```

## Personalización

1. Reemplazar la foto en `img/foto-pareja.jpg`
2. Actualizar en `index.html`:
   - Nombres de los novios
   - Fecha de la boda
   - Horarios de ceremonia y recepción
   - Números de WhatsApp (reemplazar `591XXXXXXXX`)
   - Direcciones de los locales
   - Datos bancarios para regalos
3. La fecha del countdown se ajusta en `script.js` (si la fecha ya pasó, avanza al próximo año automáticamente para el demo)

## Comprimir imágenes

Existe el script `compress.ps1` (excluido del repo). Para usarlo:

```powershell
powershell -ExecutionPolicy Bypass -File compress.ps1
```

Redimensiona los JPEG de `img/` a un ancho máximo de 1300px con calidad 76.