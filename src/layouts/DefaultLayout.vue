<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<template>
  <div class="flex h-screen bg-background text-foreground">
    <!-- Sidebar -->
    <Sidebar/>

    <!-- Main -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <!-- Navbar -->
      <Navbar/>
      <main class="p-6 overflow-y-auto">
          <RouterView/>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
