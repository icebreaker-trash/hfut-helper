import type { Ref } from 'vue'
import { ref } from 'vue'

export function useStorage<T>(
  key: string,
  initialValue: T,
): Ref<T> {
  const val = ref(uni.getStorageSync(key))
  if (!val.value) {
    uni.setStorageSync(key, initialValue)
    val.value = uni.getStorageSync(key)
  }

  return val
}
