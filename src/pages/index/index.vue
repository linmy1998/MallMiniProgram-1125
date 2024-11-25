<!--
 * @Author: linmingyu
 * @Date: 2023-11-06 16:00:18
 * @LastEditors: linmingyu
 * @LastEditTime: 2023-11-20 15:20:58
 * @Description: file content
-->
<script setup lang="ts">
import CustomNavBar from './componets/CustomNavbar.vue'
import CategoryPanel from './componets/CategoryPanel.vue'
import HotPanel from './componets/HotPanel.vue'
import { getHomeBannerAPI, getCategoryMutliAPI, getHotMutliAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref([])
const categoryMutliList = ref([])
const hotMutliList = ref([])

const guessLikeRef = ref()

const getHomeBannerList = async () => {
  const response = await getHomeBannerAPI()
  bannerList.value = response.result
}

const getCategoryMutliList = async () => {
  const response = await getCategoryMutliAPI()
  categoryMutliList.value = response.result
}

const getHotMutliList = async () => {
  const response = await getHotMutliAPI()
  hotMutliList.value = response.result
}

onLoad(() => {
  getHomeBannerList()
  getCategoryMutliList()
  getHotMutliList()
})

const onScrolltolower = () => {
  guessLikeRef.value.getGuessLikeList()
}

const isTriggered = ref(false)

const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessLikeRef.value.resetData()
  await Promise.all([
    getHomeBannerList(),
    getCategoryMutliList(),
    getHotMutliList(),
    guessLikeRef.value.getGuessLikeList(),
  ])
  isTriggered.value = false
}
</script>

<template>
  <CustomNavBar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    scroll-y="true"
  >
    <XtxSwiper :bannerList="bannerList" />
    <CategoryPanel :categoryMutliList="categoryMutliList" />
    <HotPanel :hotMutliList="hotMutliList" />
    <XtxGuess ref="guessLikeRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
