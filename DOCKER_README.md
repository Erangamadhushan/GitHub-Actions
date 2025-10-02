# Docker Configuration

This project includes a complete Docker setup for both development and production environments.

## 🏗️ Architecture

- **Client**: React + TypeScript + Vite frontend (Nginx in production)
- **Server**: Node.js + Express backend 
- **Database**: MongoDB
- **Orchestration**: Docker Compose

## 🚀 Quick Start

### Production Build
```bash
docker-compose up -d
```

### Development with Hot Reload
```bash
docker-compose --profile dev up -d
```

## 📋 Available Services

| Service | Port | Description |
|---------|------|-------------|
| client | 80 | Production React app (Nginx) |
| client-dev | 5173 | Development React app (Hot reload) |
| server | 3000 | Node.js API server |
| mongodb | 27017 | MongoDB database |

## 🛠️ Commands

### Build Images
```bash
# Build all services
docker-compose build

# Build specific service
docker-compose build server
docker-compose build client
```

### Run Services
```bash
# Start all services
docker-compose up -d

# Start specific service
docker-compose up -d server

# View logs
docker-compose logs -f server
docker-compose logs -f client
```

### Development Mode
```bash
# Start with development client (hot reload)
docker-compose --profile dev up -d

# Stop development mode
docker-compose --profile dev down
```

### Database Management
```bash
# Access MongoDB shell
docker-compose exec mongodb mongosh -u admin -p password123

# View database logs
docker-compose logs -f mongodb
```

### Cleanup
```bash
# Stop and remove containers
docker-compose down

# Remove everything including volumes
docker-compose down -v

# Remove images
docker-compose down --rmi all
```

## 🔧 Configuration

### Environment Variables

Create `.env` files for custom configuration:

**Server (.env)**
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://admin:password123@mongodb:27017/github_actions_db?authSource=admin
```

**Client (.env)**
```env
VITE_API_URL=http://localhost:3000
```

### MongoDB Setup

Default credentials:
- Username: `admin`
- Password: `password123`
- Database: `github_actions_db`

### Health Checks

The server includes health check endpoints:
- URL: `http://localhost:3000/health`
- Docker health checks are configured automatically

## 🚀 GitHub Actions CI/CD

The project includes automated Docker builds:

1. **Triggers**: Push to main/development, Pull requests
2. **Images Built**: 
   - `erangamadhushan/github-actions-client`
   - `erangamadhushan/github-actions-server`
3. **Registry**: Docker Hub

### Required Secrets

Set these in your GitHub repository secrets:
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password/token

## 📁 Docker Files Structure

```
├── docker-compose.yml          # Main orchestration
├── client/
│   ├── Dockerfile             # Production build
│   ├── Dockerfile.dev         # Development build
│   └── .dockerignore
├── server/
│   ├── Dockerfile             # Server build
│   ├── healthcheck.js         # Health check script
│   └── .dockerignore
└── .github/workflows/
    └── docker-configure.yml   # CI/CD pipeline
```

## 🔍 Troubleshooting

### Common Issues

1. **Port conflicts**: Change ports in `docker-compose.yml`
2. **Permission issues**: Ensure Docker has proper permissions
3. **Build failures**: Check `.dockerignore` files and dependencies

### Useful Commands
```bash
# Check container status
docker-compose ps

# View resource usage
docker stats

# Access container shell
docker-compose exec server sh
docker-compose exec client sh

# Rebuild without cache
docker-compose build --no-cache
```

## 📱 Accessing the Application

- **Frontend (Production)**: http://localhost
- **Frontend (Development)**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Health Check**: http://localhost:3000/health
- **MongoDB**: localhost:27017