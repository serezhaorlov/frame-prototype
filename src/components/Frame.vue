<template>
  <div class="frame">
    <p class="frame__error" v-if="error">
      Ошибка при загрузке видеокадра {{ frameId }}
    </p>
    <component class="frame__svg" v-else :is="currentFrame" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, shallowRef, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import frames from '@/frames';

export default defineComponent({
  name: 'Frame',
  setup() {
    const route = useRoute();
    const { frameId } = route.params;

    const value = ref(0);
    const currentFrame = shallowRef(undefined);
    const freq = shallowRef(500);
    const error = ref(false);

    const frame = frames.find((frame) => frame.id === Number(frameId));

    if (!frame) {
      error.value = true;
    } else {
      const executeScenario = new Function('value', frame.scenario);

      import(`@/assets/frames/${frameId}.svg`).then(async (frame) => {
        currentFrame.value = frame.default;
        await nextTick();
        watch(value, (value: number) => {
          executeScenario(value);
        });
      });

      setInterval(() => {
        value.value = Math.round(Math.random() * 100);
      }, freq.value);
    }

    return { currentFrame, frameId, error };
  },
});
</script>

<style lang="less" scoped>
.frame {
  display: flex;
  justify-content: center;
  align-items: center;

  &__error {
    color: red;
  }

  &__svg {
    width: 100%;
    height: 100%;
  }
}
</style>
