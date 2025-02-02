import axios from "axios";

const API_URL = "https://679be35633d3168463257114.mockapi.io/api/test";

// объект с кастомными титлами
const customTitles = {
  1: "Відгуки наших клієнтів у Google",
  2: "Відгуки наших клієнтів у Youtube",
  3: "Відгуки наших клієнтів у Facebook"
};

// объект с кастомными ссылками
const customLinks = {
  1: "https://www.google.com",
  2: "https://www.youtube.com",
  3: "https://www.facebook.com"
};

// объект с кастомными картинками
const customImgs = {
  1: "/src/img/google.svg",
  2: "/src/img/youtube.svg",
  3: "/src/img/facebook.svg"
}

export const getScores = async () => {
  try {
    const response = await axios.get(`${API_URL}/score`);
    const data = response.data;

    // Заменяем title link и Img на кастомные значения, если они есть
    const updatedData = data.map(item => ({
      ...item,
      title: customTitles[item.id] || item.title,
      link: customLinks[item.id] || item.link,
      img: customImgs[item.id] || item.img
    }));

    return updatedData;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return [];
  }
};


