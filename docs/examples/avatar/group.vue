<template>
  <div class="demo-group">
    <div class="mb-4">
      <el-avatar-group
        :max="3"
        :max-style="{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
          cursor: 'pointer',
        }"
      >
        <el-avatar v-for="item in 6" :key="item"> user{{ item }} </el-avatar>
      </el-avatar-group>
    </div>

    <div class="mb-4">
      <el-avatar-group
        :max="3"
        max-popover-trigger="click"
        shape="square"
        :max-style="{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
          cursor: 'pointer',
        }"
      >
        <el-avatar v-for="item in 6" :key="item"> {{ item }} </el-avatar>
      </el-avatar-group>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
