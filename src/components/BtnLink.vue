<script setup>
import { defineProps } from 'vue';

defineProps({
  to: String,  // Ссылка
  text: String // Текст кнопки
});
</script>

<template>
  <a :href="to" target="_blank" class="btn btn__first">
    {{ text }}
  </a>
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

.btn__first {
  background-color: $btn1-bg;
  border: 1px solid $btn1-border;
}
</style>
