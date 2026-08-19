# Invitación de Boda - Mariana & Daniel

Landing page de invitación de boda con dos propuestas de diseño para presentar al cliente.

## Propuestas

### Propuesta 1: Azul Romántico Artesanal
- Paleta de colores azul royal, plata y dorado
- Estilo tarjeta de invitación formal con doble marco ornamental
- Textura de papel, flores de acuarela SVG, caligrafía (Pinyon Script, Parisienne, Italiana)
- Decoraciones artesanales: guirnalda, ramas de arrayán, divisor dorado, marco en arco
- Secciones detalladas: ceremonia, recepción, itinerario, etiqueta con paleta de colores, regalos, RSVP

### Propuesta 2: Dorado Elegante
- Paleta de colores dorado sobre fondo oscuro
- Estilo moderno y elegante
- Ornamentos geométricos dorados

## Funcionalidades

- **Selector de propuestas**: Tabs en la parte superior para alternar entre diseños
- **Countdown**: Temporizador regresivo hasta la fecha de la boda
- **Botones de WhatsApp**: Para confirmar asistencia contactando al novio o novia
- **Mapa**: Botones que detectan iOS (Apple Maps) o Android/Desktop (Google Maps)
- **Reproductor de música**: Demo visual del player
- **Mobile-first**: Diseño optimizado para dispositivos móviles

## Estructura

```
├── index.html          # HTML principal con ambas propuestas
├── styles.css          # Estilos para ambos diseños
├── script.js           # Funcionalidades JS
├── netlify.toml        # Configuración de Netlify
├── _redirects          # Redirecciones Netlify
└── img/                # Carpeta de imágenes
    ├── guirnalda.svg   # Guirnalda floral acuarela
    ├── flor-esquina.svg# Arreglo floral de esquina
    ├── divisor.svg     # Divisor ornamental dorado
    ├── marco-arco.svg  # Marco en arco para foto
    ├── arrayan.svg     # Rama de arrayán
    ├── foto-pareja.jpg        # Propuesta 1
    ├── foto-pareja-3.jpg      # Propuesta 2
    └── foto-pareja-footer.jpg # Footer (propuesta 2)
```

## Personalización

1. Reemplazar las imágenes en la carpeta `img/`
2. Actualizar los datos en `index.html`:
   - Nombres de los novios (portada, sección padres, canción)
   - Fecha de la boda (portada, sección fecha, script.js)
   - Horarios de ceremonia y recepción
   - Números de WhatsApp (reemplazar `591XXXXXXXX`)
   - Direcciones de los locales
   - Datos bancarios para regalos

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

# Preview (link temporal)
netlify deploy --dir .
```

## Comprimir imágenes

Existe el script `compress.ps1` (excluido del repo). Para usarlo:

```powershell
powershell -ExecutionPolicy Bypass -File compress.ps1
```

Redimensiona los JPEG de `img/` a un ancho máximo de 1300px con calidad 76.
