import type { AnimationItem } from 'lottie-web';
import lottie from 'lottie-web';
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';

export function useLottie(json: object, loop: boolean = false) {
  const lavContainer: Ref<HTMLDivElement | null> = ref(null);
  let anim: AnimationItem | null = null;

  function playAnimation() {
    anim?.play();
  }

  function stopAnimation() {
    anim?.stop();
  }

  onMounted(() => {
    if (lavContainer.value) {
      anim = lottie.loadAnimation({
        container: lavContainer.value,
        renderer: 'svg',
        animationData: json,
        autoplay: false,
        loop,
        rendererSettings: {
          className: 'lottie_svg',
        },
      });
    }
  });

  return { lavContainer, playAnimation, stopAnimation };
}
