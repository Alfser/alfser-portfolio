# Estágio 1: Build da aplicação React
FROM node:20-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci && npm cache clean --force

# Copia o restante do código fonte
COPY . .

# Gera o build de produção
RUN npm run build

# Estágio 2: Servir com NGINX (usuário não-root)
FROM nginx:alpine

# Remove a configuração padrão do NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos de build do React
COPY --from=build /app/dist /usr/share/nginx/html

# Copia a configuração customizada do NGINX
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Cria um usuário não-root para o NGINX
RUN addgroup -g 1001 -S nginx-user && \
    adduser -u 1001 -S nginx-user -G nginx-user

# Ajusta as permissões dos diretórios
RUN chown -R nginx-user:nginx-user /usr/share/nginx/html && \
    chown -R nginx-user:nginx-user /var/cache/nginx && \
    chown -R nginx-user:nginx-user /var/log/nginx && \
    chown -R nginx-user:nginx-user /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx-user:nginx-user /var/run/nginx.pid

# Remove arquivos desnecessários para reduzir a imagem
RUN rm -rf /etc/nginx/conf.d/default.conf.bak && \
    rm -rf /usr/share/nginx/html/*.html.bak

# Adiciona scripts de saúde
RUN apk add --no-cache curl

# Expõe a porta 80
EXPOSE 80

# Troca para o usuário não-root
USER nginx-user

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health || exit 1

# Comando para iniciar o NGINX
CMD ["nginx", "-g", "daemon off;"]