# Netlify Deployment Guide - BUDS MOTOR

## Opsi 1 - Deploy via GitHub

1. Push project ini ke GitHub repository.
2. Login ke Netlify.
3. Pilih **Add new project**.
4. Pilih **Import an existing project**.
5. Connect ke GitHub repository.
6. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Klik **Deploy**.

Setiap update ke GitHub akan auto-deploy.

## Opsi 2 - Manual Deploy via Drag & Drop

1. Jalankan:
   ```bash
   npm install
   npm run build
   ```
2. Buka Netlify dashboard.
3. Drag & drop folder `dist/` ke Netlify Drop.
4. Jangan upload ZIP project untuk manual deploy. Upload folder `dist/`.

## Local Test

```bash
npm install
npm run check
npm run dev
```
