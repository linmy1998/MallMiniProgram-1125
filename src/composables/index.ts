import { ref } from 'vue'
export const getGuessLikeList = () => {
  const guessRef = ref<any>()

  const onScrolltolower = () => {
    guessRef.value.getGuessLikeList()
  }

  return {
    guessRef, onScrolltolower
  }
}