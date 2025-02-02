<script setup>
import { defineProps } from 'vue';
import { ref } from "vue";

defineProps({
  modal: String, // Текст модалки
  text: String, // Текст кнопки
});

const isModalOpen = ref(false);
const toggleModal = (state) => {
  isModalOpen.value = state;
};
</script>

<template>
  <button @click="toggleModal(true)" class="btn btn__second">{{ text }}</button>
  <div v-if="isModalOpen" class="modal-overlay">
    <div class="modal">
      <p>{{ modal }}</p>
      <button @click="toggleModal(false)" class="btn btn__close">Закрити</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  font-size: 14px;
  padding: 11px 22px;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 2px 5px 1px $shadow;
  }

  @include sm {
    width: 100%;
  }
}

.btn__second {
  background-color: $btn2-bg;
  color: $white;
}

/* modal style */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: $white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
}

.modal textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
}

.btn__close {
  margin-top: 10px;
  background: $red;
  color: $white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>