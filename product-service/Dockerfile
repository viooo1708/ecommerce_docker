#gunakan image node js versi 18
FROM node:18-alpine

#set working directory di dalam container
WORKDIR /app

#copy file package.json ke dalam container
COPY package*.json ./

#install dependencies
RUN npm install

#COPY semua file ke dalam container
COPY . .

#expose port 3000 (agar bisa diakses dari luar container)
EXPOSE 3000

#jalankan aplikasi
CMD ["npm", "start"]