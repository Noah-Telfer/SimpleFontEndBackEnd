FROM node:20-alpine

WORKDIR /app
COPY . .
RUN npm install && npm run build

# Use a lightweight HTTP server to serve the build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
