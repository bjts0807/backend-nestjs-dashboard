# API - NestJS - Dashboard

Este repositorio contiene la API REST construida con NestJS y MySQL para autenticación, gestión de clientes y dashboards dinámicos.

# Tecnologías

- NestJS
- TypeORM
- JWT
- Passport

# Requisitos

- Node.js 18 o superior
- Mysql 8.x
- npm 

# Instalación 
- Clona el repositorio: git clone https://github.com/bjts0807/backend-nestjs-dashboard.git
- Entra a la carpeta : cd api-nestjs-dashboard
- Instala las dependencias : npm install

# variables de entorno
- Crea un archivo .env en la raiz del proyecto con el siguiente contenido:

  - DB_HOST=localhost
  - DB_PORT=3306
  - DB_USERNAME=root
  - DB_PASSWORD=tu_contraseña
  - DB_NAME=tu_db
  - JWT_SECRET=clave_secreta_segura
  - JWT_EXPIRES_IN=3600s

- Generar una clave secreta: 
Abra su terminal o símbolo del sistema.
Ejecute el siguiente script de Node.js para generar una cadena aleatoria:

node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# levantar el servidor

- npm run start:dev
- El servidor estará disponible en http://localhost:3000

# Autenticación

- Registre un cliente en la ruta /clients/register
- Esta API usa JWT para autenticar a los clientes. Debes hacer login en la ruta /auth/login y luego usar el token para acceder a rutas protegidas.







