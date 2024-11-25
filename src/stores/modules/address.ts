import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<any>()

  const changeSelectedAddress = (val: any) => {
    selectedAddress.value = val
  }

  return { selectedAddress, changeSelectedAddress }
})