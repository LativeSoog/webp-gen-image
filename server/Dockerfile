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

# Устанавливаем переменную окружения для порта
ENV PORT=3000

# Открываем порт 3000 для внешнего доступа
EXPOSE 3000

# Запускаем сервер
CMD ["npm", "start"]
