# Export to Video

Editor/conversor de video que funciona directamente en el navegador y está pensado para GitHub Pages.

## Funciones

- Arrastrar varios videos o GIF y ordenarlos como una secuencia.
- Preview local dentro del navegador.
- Recorte de entrada/salida por clip.
- Unión de varios clips y transición simple por fundido.
- Timeline por canales: video, texto y gráficos.
- Texto, formas y capas de color sólido con tiempo, posición y opacidad.
- Exportación a MP4, WebM, MOV, MKV, GIF, secuencia PNG o secuencia JPG.
- Las secuencias se empaquetan como ZIP.
- Barra de progreso por fases del render.
- Procesamiento local: los videos no se suben a un backend.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El workflow `.github/workflows/pages.yml` compila `dist/` y lo publica con GitHub Pages cuando hay cambios en `main`.

## Nota de rendimiento

FFmpeg/WASM consume bastante RAM y CPU. Los proyectos 4K largos pueden superar los límites prácticos de un navegador; para esos casos conviene trabajar con clips más cortos o 720p/1080p.
