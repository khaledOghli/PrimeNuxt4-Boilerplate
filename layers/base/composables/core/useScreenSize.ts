import { computed, onMounted, onUnmounted, reactive, shallowRef } from 'vue';

export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl';

export const defaultScreenConfig: Record<ScreenSize, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function useScreenSize() {
  const screenSize = reactive({
    width: 0,
    height: 0,
  });

  const current = shallowRef<ScreenSize>('sm');

  const getSize = (width: number = screenSize.width): ScreenSize => {
    if (width < defaultScreenConfig.sm)
      return 'sm';
    if (width < defaultScreenConfig.md)
      return 'md';
    if (width < defaultScreenConfig.lg)
      return 'lg';
    return 'xl';
  };

  const onWindowResize = () => {
    const { innerWidth, innerHeight } = window;
    screenSize.width = innerWidth;
    screenSize.height = innerHeight;
    current.value = getSize();
  };

  const higherThan = (size: ScreenSize, defScreenSize: ScreenSize = current.value): boolean => {
    const width = defaultScreenConfig[defScreenSize];
    return width >= defaultScreenConfig[size];
  };

  const isHigherThan = (size: ScreenSize) => {
    return computed(() => higherThan(size));
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onWindowResize);
      onWindowResize();
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', onWindowResize);
    }
  });

  return {
    screenSize,
    current,
    higherThan,
    isHigherThan,
  };
}
