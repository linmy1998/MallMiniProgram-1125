<!--
 * @Author: linmingyu
 * @Date: 2023-11-07 10:20:28
 * @LastEditors: linmingyu
 * @LastEditTime: 2023-11-14 16:32:46
 * @Description: file content
-->
<script setup lang="ts">
import { ref, defineProps } from 'vue'
const props = defineProps<{
  bannerList: string[]
}>()

const activeIndex = ref(0)
const changeItem: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail!.current
}
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" @change="changeItem">
      <swiper-item v-for="(item, index) in bannerList">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item?.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in bannerList"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
/* 轮播图 */
.carousel {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>