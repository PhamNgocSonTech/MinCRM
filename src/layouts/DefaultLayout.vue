<script setup>
import Navbar from '@/components/layout/Navbar.vue'
</script>

<template>
  <div class="flex h-screen bg-background text-foreground">
    <!-- Main -->
    <div class="flex flex-1 flex-col">
      <!-- Navbar -->
      <Navbar/>
      <main class="p-6 overflow-y-auto">
          <RouterView/>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
