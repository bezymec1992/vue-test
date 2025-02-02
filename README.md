# vue-project
This template should help get you started developing with Vue 3 in Vite.

Інструкція для запуску проєкту
git clone https://github.com/bezymec1992/vue-test.git
cd vue-test
npm install
npm run dev

Опис використаного API
В проєкті використовується MockAPI для отримання даних. API знаходиться за адресою:
https://679be35633d3168463257114.mockapi.io/api/test

Приклад одного об'єкта, який повертається з API:
{
  "score": 59,
  "reviews": 12,
  "title": "title 1",
  "link": "link 1",
  "img": "img 1",
  "id": "1"
}

Опис функціональності
Проєкт розбито на компоненти, що включають:

BtnLink — кнопка, яка перенаправляє на вказаний сайт через посилання, що надходить з API.
BtnModal — кнопка, що викликає модальне вікно з динамічним текстом.

Використовується система міксинів та перемінні
Використовується Адаптивна верстка
