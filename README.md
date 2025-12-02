-> Sitio Web Empresarial - Nimbus Technology

Sitio web corporativo desarrollado para presentar los servicios, el equipo y los canales de contacto de la empresa Nimbus Technology. Está construido con React, Vite y Material UI (MUI), priorizando un diseño limpio, moderno y completamente responsivo.
___________________________________________________________
-> Tecnologías utilizadas

- React: Librería principal para la UI.
- Vite: Empaquetador de desarrollo ligero y rápido.
- Material UI (MUI): Sistema de componentes para diseño profesional.
- JavaScript (ES2020+)
- CSS
___________________________________________________________
-> Estructura principal del Proyecto

src/
│
├── components/
│   ├── Footer/
│   ├── Layout/
│   ├── Navbar/
│   ├── ScrollToTop/
│   └── ServicesList/
│
├── pages/
│   ├── About/
│   ├── Contact/
│   ├── Home/
│   └── Services/
│
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── Router.jsx

-> Descripción de componentes principales

- Navbar: Navegación fija superior con menú y logo.
- Footer: Información de contacto, mapa y enlaces inferiores.
- Layout: Componente envoltorio para estructura general del sitio.
- ScrollToTop: Control automático del scroll en cambios de ruta.
- ServicesList: Renderizado de los servicios ofrecidos por la empresa.

-> Descripción de Páginas

- Home: Presentación y bienvenida inicial.
- About: Quiénes somos, resumen y equipo.
- Services: Detalle de los servicios ofrecidos.
- Contact: Información y medios para contactar a la empresa.
___________________________________________________________
-> Instalación y Uso

1. Clonar el repositorio
git clone https://github.com/Baropadi/Nimbus-page.git
cd Nimbus-page

2. Instalar dependencias
npm install

3. Ejecutar en modo desarrollo
npm run dev

4. Build de producción
npm run build

5. Vista previa del build
npm run preview
___________________________________________________________
-> Deploy

Este proyecto está desplegado con Vercel, una plataforma optimizada para proyectos construidos con React + Vite.

Cómo desplegar en Vercel

1. Asegúrate de tener la build lista:
npm run build

2. Ingresa a: https://vercel.com

3. Desde el panel de Vercel:
- New Project
- Importa el repositorio desde GitHub
- Selecciona Nimbus-page

4. Configuración recomendada:
- Framework: Vite
- Buil Command: npm run build
- Output Directory: dist

5. Haz click en Deploy.
___________________________________________________________
-> Estilo y UI

El diseño utiliza Material UI para mantener consistencia visual y una apariencia profesional.
Se emplea una paleta basada en el logo oficial de la empresa.
___________________________________________________________
-> Contacto

Este proyecto incluye una sección para que usuarios puedan contactar directamente a la empresa desde el sitio web.
___________________________________________________________
-> Estado del Proyecto

- Estructura base terminada
- Navegación y componentes principales listos
- Diseño responsivo con MUI completo
+ Mejoras futuras: integración de backend
___________________________________________________________
-> Licencia

Este proyecto fue desarrollado exclusivamente para la empresa Nimbus Technology. Uso y distribución restringida.
