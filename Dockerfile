# Étape Build
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape Prod SSR
FROM node:20-alpine AS production
WORKDIR /app

COPY --from=build /app ./

# PAS de npm install ici → Nuxt doit rester dispo

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

