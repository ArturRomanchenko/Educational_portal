# 🎓 Навчальний Портал

## ⚙️ Вимоги

- Встановіть [Node.js](https://nodejs.org/) (рекомендовано останню LTS-версію).

## 🚀 Як запустити проєкт локально

1. Встановіть залежності:
   ```sh
   npm install
   ```
2. Запустіть локальний сервер:
   ```sh
   npm start
   ```
   Проєкт відкриється на [http://localhost:3000](http://localhost:3000).

## 🌐 Як розгорнути на хостингу

1. Зберіть проєкт для продакшена:
   ```sh
   npm run build
   ```
2. У папці `build` з'явиться готовий сайт. Завантажте вміст цієї папки на ваш хостинг.

## 📄 Як додати новий матеріал (лекцію, практику, самостійну, семінар)

1. Додайте PDF-файл у відповідну папку:

   - Для лекцій: `public/api/lectures/`
   - Для практичних: `public/api/practice/`
   - Для самостійних: `public/api/independent/`
   - Для семінарів: `public/api/seminars/`

2. Відкрийте відповідний JSON-файл у `public/api/`:

   - Лекції: `lectures.json`
   - Практичні: `practice.json`
   - Самостійні: `independent.json`
   - Семінари: `seminars.json`

3. Додайте новий об'єкт у масив, наприклад:

   ```json
   {
   	"id": "10",
   	"title": "Назва матеріалу",
   	"link": "/api/lectures/10.pdf"
   }
   ```

   Для семінарів і практичних робіт також можна додати поля `description`, `test` або `theme` за потреби.

4. Збережіть файл. Новий матеріал з'явиться на сайті автоматично після оновлення сторінки.

## 🛠️ Стек технологій

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/reactƒicons/)
- [Axios](https://axios-http.com/)
- [Motion](https://motion.dev/)
