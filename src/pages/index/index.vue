<template>
  <text @tap="toLogin">Index Page</text>
</template>

<script lang="ts" setup>
const toLogin = () => {
  uni.navigateTo({
    url: '/pages/public/login',
  })
}
</script>
