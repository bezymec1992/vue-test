<script setup>
import { ref, onMounted } from "vue";
import { getScores } from "@/services/api";
import BtnLink from "@/components/BtnLink.vue";
import BtnModal from "@/components/BtnModal.vue";

const scores = ref([]);

onMounted(async () => {
  scores.value = await getScores();
});
</script>

<template>
  <div v-if="scores.length" class="container">
    <div v-for="score in scores" :key="score.id" class="items wrapper">
      <div class="main__wrapper">
        <div class="customer__wrapper">
          <img :src="score.img" alt="google-icon" width="40" height="40">
          <p class="customer"><strong>{{ score.title }}</strong></p>
        </div>
        <div class="stars__wrapper">
          <span class="score">{{ score.score }}</span>
          <div class="start__img-wrapper">
            <img src="@/img/star-full.svg" alt="star" width="30" height="30">
            <img src="@/img/star-full.svg" alt="star" width="30" height="30">
            <img src="@/img/star-full.svg" alt="star" width="30" height="30">
            <img src="@/img/star-full.svg" alt="star" width="30" height="30">
            <img src="@/img/star-half.svg" alt="star" width="30" height="30">
          </div>
          <p class="reviews">{{ score.reviews }} відгуки</p>
        </div>
      </div>
      <div class="btns__wrapper">
        <BtnLink :to="score.link" text="Переглянути" />
        <BtnModal modal="Thank you for everything" text="Написати" />
      </div>
    </div>
  </div>
  <p v-else>Загрузка данных...</p>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 100px 16px 0;
}

.items {
  max-width: 1458px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 5px 1px $shadow;

  @include sm {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.wrapper {
  display: flex;
  align-items: center;
}

.main__wrapper {
  display: flex;
  align-items: center;

  @include xl {
    display: flex;
    flex-direction: column;
    align-items: unset;
    gap: 10px;
  }
}

.btns__wrapper {
  display: flex;
  gap: 10px;
  margin-left: auto;

  @include sm {
    margin-left: unset;
    flex-direction: column;
    width: 100%;
  }
}

.customer__wrapper {
  display: flex;
  align-items: center;
}

.customer {
  font-size: 20px;
  font-weight: 500;
  padding-left: 20px;

  @include sm {
    font-size: 18px;
  }
}

.score {
  font-weight: bold;
  font-size: 36px;
  padding-left: 60px;

  @include xl {
    padding-left: 0;
  }

  @include sm {
    font-size: 24px;
  }
}

.start__img-wrapper {
  display: flex;
}

.reviews {
  font-size: 14px;
  color: $gray;
}

.stars__wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>