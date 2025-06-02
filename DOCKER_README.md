# Guía de Docker para Mascotas App

## Archivos Docker creados:

### 1. Backend Dockerfile (`backend/Dockerfile`)
- Basado en Node.js 20 Alpine 3.20 (versión más segura)
- Configura usuario no-root para seguridad
- Incluye dumb-init para mejor manejo de señales
- Instala solo dependencias de producción
- Expone puerto 5000

### 2. Frontend Dockerfile (`frontend/Dockerfile`)
- Multi-stage build: construcción con Node.js y servir con Nginx
- Optimizado para producción
- Expone puerto 80

### 3. Docker Compose (`docker-compose.yml`)
- Orquesta backend, frontend y MongoDB
- Incluye red personalizada
- Configuración de volúmenes persistentes para la base de datos

## Comandos útiles:

### Construir y ejecutar toda la aplicación:
```bash
docker-compose up --build
```

### Ejecutar en segundo plano:
```bash
docker-compose up -d --build
```

### Detener servicios:
```bash
docker-compose down
```

### Ver logs:
```bash
docker-compose logs -f
```

### Construir solo un servicio:
```bash
docker-compose build backend
docker-compose build frontend
```

## Acceso a la aplicación:
- Frontend: http://localhost
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

## Variables de entorno importantes:
Copia el archivo `.env.example` a `.env` en el directorio backend:
```bash
cp backend/.env.example backend/.env
```

Edita el archivo `docker-compose.yml` y `backend/.env` para configurar:
- Credenciales de MongoDB
- JWT Secret para el backend
- Variables de conexión a base de datos
- CORS origins permitidos

## Notas:
- Los archivos `.dockerignore` optimizan el contexto de construcción
- La configuración incluye restart policies para alta disponibilidad
- Los volúmenes aseguran persistencia de datos
