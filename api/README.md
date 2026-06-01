# API REST - web-avg-app

## Descripción
Backend Node.js mínimo con un endpoint de catálogo y un endpoint de salud.

## Ejecución local
```powershell
cd api
node server.js
```

## Endpoints
- `GET /api/catalogo` - devuelve una lista de productos de ejemplo.
- `GET /health` - comprobación de salud.

## Docker
Desde `proyecto/web-avg-app` se puede arrancar el servicio con:
```powershell
docker compose up --build
```

## Notas
- El archivo `api/server.js` es un servidor HTTP básico usando el módulo nativo de Node.
- El `package.json` define el comando `npm start`.
