# ==============================================================================
# Multi-Stage Production Dockerfile for Chandan Kumar's Portfolio
# Stage 1: Build static assets using Node.js
# Stage 2: Serve optimized static assets with hardened, lightweight Nginx
# Compatible with: Render, Railway, AWS ECS/EKS, Fly.io, and Local Docker
# ==============================================================================

# --- Stage 1: Build Stage ---
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies utilizing Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source
COPY . .

# Compile optimized static distribution into /app/dist
RUN npm run build

# --- Stage 2: Production Web Server ---
FROM nginx:1.27-alpine AS runner

# Default port fallback (Render, Cloud Run, and Railway automatically inject $PORT)
ENV PORT=80

# Clean default boilerplates
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/*

# Copy configuration template:
# The official Nginx Alpine image automatically runs `envsubst` on templates in /etc/nginx/templates/*.template
# to dynamically substitute ${PORT} at container boot.
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Launch Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
