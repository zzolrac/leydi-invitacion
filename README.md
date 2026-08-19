# Invitación de Boda - Mariana & Daniel

Landing page de invitación de boda con dos propuestas de diseño para presentar al cliente.

## Propuestas

### Propuesta 1: Azul Romántico
- Paleta de colores azul royal y dorado
- Estilo floral y clásico
- Decoraciones con flores acuarela

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
    ├── flores-top.png
    ├── flores-bottom.png
    ├── flores-footer.png
    ├── foto-pareja.jpg
    └── foto-pareja-footer.jpg
```

## Personalización

1. Reemplazar las imágenes en la carpeta `img/`
2. Actualizar los datos en `index.html`:
   - Nombres de los novios
   - Fecha de la boda
   - Horarios de ceremonia y recepción
   - Números de WhatsApp (reemplazar `591XXXXXXXX`)
   - Direcciones de los locales
   - Datos bancarios para regalos

## Despliegue en Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Init
netlify init

# Deploy
netlify deploy --prod
```

## GitHub

```bash
git init
git add .
git commit -m "Initial commit: Wedding invitation landing page"
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```
