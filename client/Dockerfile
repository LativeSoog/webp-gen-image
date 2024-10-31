# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем сервер для раздачи статических файлов
RUN npm install -g serve

# Указываем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем сервер для раздачи файлов из папки dist
CMD ["serve", "-s", "dist", "-l", "3000"]
