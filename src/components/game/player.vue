<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import keeperImg from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
import { usePosition } from "../../composables/usePosition";
import { useGameStore } from "../../store/game";

useMove();
const { player } = usePlayerStore();
const { position } = usePosition(player);
const { detectionGameCompleted } = useGameStore();

function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToDown,
    movePlayerToRight,
    movePlayerToUp,
  } = usePlayerStore();

  function handleKeyup(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
      case "ArrowUp":
        movePlayerToUp();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
    }

    detectionGameCompleted();
  }

  onMounted(() => {
    window.addEventListener("keyup", handleKeyup);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyup);
  });
}
</script>

<style scoped></style>
