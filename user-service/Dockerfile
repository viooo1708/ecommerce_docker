# Gunakan Node.js versi 18
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json & install dependencies
COPY package*.json ./
RUN npm install

# Copy semua file ke container
COPY . .

# Expose port 4000
EXPOSE 4000

# Jalankan aplikasi
CMD ["npm", "start"]
