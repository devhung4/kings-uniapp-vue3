<template>
  <view class="px-5 min-h-screen pt-[93px] bg-black w-full h-full text-white">

    <view class="flex justify-start items-end gap-[5px]">
      <text class="text-4xl font-bold">登入</text>
      <text class="text-sm font-normal text-[rgba(235,235,245,0.6)]">帳戶，享受全球便捷消費</text>
    </view>

    <view class="flex flex-col gap-5 mt-10">
      
      <FormField
        v-model="email"
        type="email"
        autocomplete="email"
        placeholder="请输入邮箱" />

      <FormField
        v-model="password"
        type="password"
        autocomplete="current-password"
        placeholder="請輸入密碼" />

      <view
        class="flex flex-row justify-between items-center text-sm font-normal">
        <text class="text-[rgba(235,235,245,0.6)]">用戶注冊</text>
        <text class="text-primary">忘记密码？</text>
      </view>

      <view class="flex flex-row text-sm items-center">
        <text class="text-sm text-[rgba(235,235,245,0.6)]">
          我已閲讀并同意
          <text class="text-primary/80">《服務協議》</text> 和
          <text class="text-primary/80">《隱私政策》</text>
        </text>
      </view>

      <Button
        :loading="true"
        :disabled="isLoading"
        @tap="handleTap"
        type="primary"
        class="mt-[66px]">
        立即登录
      </Button>

    </view>

  </view>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button/Button.vue'
import FormField from '@/components/FormField.vue'
const title = ref('Hello')

const email = ref('thecvcoder@foxmail.com')
const password = ref('Hong@123654')
const isLoading = ref(false)

const handleChange = () => {
  console.log(title.value)
}

const handleTap = async () => {
  console.log('taped')
  isLoading.value = true
  const resp = await new Promise((resolve, reject) => {
    setTimeout(() => {
      // isLoading.value = false
      resolve(true)
    }, 2000)
  })
  if (resp) {
    isLoading.value = false
  } else {
    isLoading.value = false
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
