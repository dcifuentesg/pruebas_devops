# Dockerfile para el Backend (Node.js/Express)
FROM node:24-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Actualizar el sistema y agregar dumb-init para mejor manejo de señales
RUN apk add --no-cache dumb-init

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar el código fuente
COPY . .

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Cambiar la propiedad de los archivos al usuario nodejs
RUN chown -R nodejs:nodejs /app
USER nodejs

# Exponer el puerto (ajustar según tu configuración)
EXPOSE 5000

# Comando de inicio con dumb-init para mejor manejo de señales
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "serve"]
