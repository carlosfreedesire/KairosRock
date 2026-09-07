# thekairosrock.com

Sitio estático de **Kairós / The Kairos Rock**, listo para GitHub Pages.

No hay frameworks ni build step: abre los HTML en el navegador o sirve la carpeta como estáticos.

## Árbol de archivos

```
thekairosrock/
├── CNAME
├── MANIFEST.txt
├── README.md
├── index.html
├── musica.html
├── sobre.html
├── css/
│   └── styles.css
└── blog/
    ├── index.html
    ├── primer-ensayo.html
    ├── ruido-en-la-sala.html
    └── kairos-no-espera.html
```

## Publicar en GitHub Pages (resumen)

1. Sube este directorio a un repositorio (por ejemplo `carlosfreedesire/KairosRock` o `carlosfreedesire/KairosRock`).
2. En el repo: **Settings → Pages** → Source: branch `main` (o `gh-pages`), carpeta `/ (root)`.
3. El archivo `CNAME` ya apunta a `thekairosrock.com`.

## DNS en Squarespace (sin cambiar nameservers)

Mantén los nameservers de Squarespace. Añade/edita registros DNS personalizados así:

### www → GitHub Pages

| Tipo  | Host | Datos / apunta a        |
|-------|------|-------------------------|
| CNAME | www  | `carlosfreedesire.github.io`    |

### Apex (raíz) → GitHub Pages (A)

| Tipo | Host | Datos              |
|------|------|--------------------|
| A    | `@`  | `185.199.108.153`  |
| A    | `@`  | `185.199.109.153`  |
| A    | `@`  | `185.199.110.153`  |
| A    | `@`  | `185.199.111.153`  |

### Opcional: IPv6 (AAAA) — docs de GitHub

| Tipo | Host | Datos                                 |
|------|------|---------------------------------------|
| AAAA | `@`  | `2606:50c0:8000::153`                 |
| AAAA | `@`  | `2606:50c0:8001::153`                 |
| AAAA | `@`  | `2606:50c0:8002::153`                 |
| AAAA | `@`  | `2606:50c0:8003::153`                 |

Tras propagar DNS, verifica el dominio personalizado en **Settings → Pages** del repositorio.

## Contenido pendiente

- Spotify ya está en `musica.html`.
- Falta el enlace real de YouTube (`PLACEHOLDER` en `musica.html`).

## Licencia / uso

Proyecto de banda/proyecto rock. Contenido de ejemplo en español.
