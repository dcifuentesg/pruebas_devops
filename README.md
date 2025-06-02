# 🐾 Mascotas App Web

[![CI Pipeline](https://github.com/dcifuentesg/pruebas_devops/actions/workflows/ci.yml/badge.svg)](https://github.com/dcifuentesg/pruebas_devops/actions/workflows/ci.yml)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Docker](https://img.shields.io/badge/docker-built-blue)
![Security](https://img.shields.io/badge/security-scanned-green)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[![CI Pipeline](https://github.com/dcifuentesg/pruebas_devops/actions/workflows/ci.yml/badge.svg)](https://github.com/dcifuentesg/pruebas_devops/actions/workflows/ci.yml)
[![CD Pipeline](https://github.com/dcifuentesg/pruebas_devops/actions/workflows/cd.yml/badge.svg)](https://github.com/dcifuentesg/pruebas_devops/actions/workflows/cd.yml)
[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://github.com/dcifuentesg/pruebas_devops)
[![Node.js](https://img.shields.io/badge/node.js-20%2B-green)](https://nodejs.org/)

Aplicación web para gestión de mascotas con backend Node.js/Express y frontend React, completamente dockerizada con CI/CD.

## 🚀 Features

- ✅ Sistema de autenticación (registro/login)
- 🐾 Gestión de mascotas
- 🔐 JWT Authentication
- 🐳 Completamente dockerizado
- 🔄 CI/CD con GitHub Actions
- 📊 MongoDB Atlas
- 🧪 Testing automatizado
- 🛡️ Security scanning

## 🏗️ Arquitectura

- **Backend:** Node.js + Express + MongoDB
- **Frontend:** React + Vite
- **Base de datos:** MongoDB Atlas
- **Contenedores:** Docker + Docker Compose
- **CI/CD:** GitHub Actions

## 🚀 Quick Start

```bash
# Clonar el repositorio
git clone https://github.com/dcifuentesg/pruebas_devops.git
cd pruebas_devops

# Ejecutar con Docker
docker-compose up --build

# Acceder a la aplicación
# Frontend: http://localhost
# Backend API: http://localhost:5000
```

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test
npm run test:coverage

# Frontend tests
cd frontend
npm test
npm run test:coverage
```

## 📋 CI/CD Pipeline

El proyecto incluye GitHub Actions para:

- ✅ **Testing automático** en Node.js 20.x y 22.x
- 🐳 **Docker build** y testing
- 🛡️ **Security scanning** con Trivy
- 📦 **Dependency auditing**
- 🚀 **Auto-deployment** en push a main
- 📊 **Coverage reporting**

## 🔧 Development

Ver [DOCKER_README.md](./DOCKER_README.md) para instrucciones detalladas de Docker.