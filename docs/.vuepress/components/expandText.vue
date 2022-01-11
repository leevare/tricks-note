<template>
  <abbr data-title="Animation Comics Games" ref="abbr">ACG</abbr>
</template>

<script setup>
import { ref, onMounted, useCssModule } from 'vue';

const style = useCssModule();

const abbr = ref(null);

onMounted(() => {
  abbr.value.textContent = '';
  let title = abbr.value.dataset.title;
  let words = title.split(' ');
  words.forEach((word) => {
    let [initial, ...restLetters] = word.split('');
    let initialSpan = document.createElement('span');
    initialSpan.textContent = initial;
    initialSpan.className = style.initial;
    abbr.value.append(initialSpan);
    restLetters.forEach((letter) => {
      let hiddenSpan = document.createElement('span');
      hiddenSpan.textContent = letter;
      hiddenSpan.className = style.hidden;
      abbr.value.append(hiddenSpan);
    });
  });
});
</script>

<style lang="scss" module>
abbr {
  display: flex;
  color: white;
  font-size: 2em;
  font-weight: bold;
  font-family: Lato, sans-serif;
  text-decoration: none;

  span {
    text-decoration: underline white;
    transition: all 0.5s ease-in-out;

    &.hidden {
      max-width: 0;
      text-decoration: none;
      opacity: 0;
    }
  }

  &:hover {
    span {
      max-width: 2em;
      text-decoration: none;
      opacity: 1;

      &.initial {
        margin-left: 0.5em;
      }
    }
  }
}
</style>
