# Export to Video

Editor/conversor de video que funciona directamente en el navegador y está pensado para GitHub Pages.

## Funciones actuales

- Arrastrar múltiples clips y reordenarlos.
- Importación de MP4, MOV, WebM, MKV, AVI, MPEG/MPG, FLV, WMV, TS/MTS/M2TS, 3GP, OGV, VOB y GIF.
- Preview local; si el navegador no puede reproducir un códec, el editor intenta crear un proxy MP4 compatible con FFmpeg/WASM.
- Duración real de GIF calculada a partir de los delays de sus frames.
- Recorte In/Out desde el inspector y mediante handles en la timeline.
- Timeline con pistas separadas para video, texto y gráficos.
- Transiciones reales entre clips mediante `xfade` + `acrossfade`: fundido cruzado, por negro y por blanco, con duración editable.
- Texto, rectángulos/círculos y capas de color sólido.
- Movimiento directo de texto y formas sobre el preview.
- Movimiento y ajuste de duración de overlays directamente en la timeline.
- Capas ordenadas como: sólido → formas → texto.
- Exportación a MP4, WebM, MOV, MKV, GIF, secuencia PNG o secuencia JPG.
- Las secuencias PNG/JPG se empaquetan como ZIP.
- Barra de progreso por fases del render.
- Procesamiento local: los archivos no se suben a un backend.
- Limpieza de archivos temporales de FFmpeg incluso cuando un render falla.

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

## Límites prácticos

FFmpeg/WASM consume bastante RAM y CPU. Proyectos 4K largos o con muchos clips/capas pueden superar los límites prácticos del navegador. Para edición pesada sigue siendo preferible un editor nativo; este proyecto está planteado como editor/conversor web ligero.
