<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">
        Copyright © 2014-2022 <a href="https://blog.iwnweb.com" target="_blank">牟勇</a><br>
        <a href="https://laravel-workerman.iwnweb.com/" target="_blank">laravel-workerman</a>&nbsp;
        <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022060258号</a><br>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
.theme-container {
    min-height: 100vh;
    position: relative;

    div.footer {
        position: relative;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        padding: 1rem !important;
        padding-top: 3rem;
        padding-bottom: 0;
        white-space: nowrap;
        text-align: center !important;
    }

    :not(.home) div.footer {
        position: relative !important;
    }
}
.theme-container {
    .footer {
        position: absolute !important;
    }
}
</style>
