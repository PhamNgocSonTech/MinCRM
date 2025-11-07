<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Bell, Search  } from "lucide-vue-next"

</script>

<template>
  <header class="flex justify-between items-center w-full px-6 py-3 border-b-2">
    <!-- Search -->
    <div class="relative w-full max-w-sm">
      <Input id="search" type="text" placeholder="Search..." class="pl-10" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search class="w-5 h-5 text-muted-foreground" />
      </span>
    </div>
      <div class="flex items-center gap-3">
        <!-- Actions -->
        <Button variant="outline" size="icon" class="relative">
          <Bell class="w-4 h-4" />
          <span class="absolute w-2 h-2 bg-pink-500 rounded-full top-1 right-1"></span>
        </Button>
        <Avatar class="cursor-pointer">
          <AvatarImage src="https://mockmind-api.uifaces.co/content/cartoon/26.jpg" alt="@unovue" />
          <AvatarFallback>Ngoc Son</AvatarFallback>
        </Avatar>
      </div>
  </header>

</template>

<style scoped></style>
