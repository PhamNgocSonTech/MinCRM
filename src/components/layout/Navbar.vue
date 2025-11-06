<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Bell, Search  } from "lucide-vue-next"

</script>

<template>
  <div class="flex justify-between items-center px-4 py-2">
    <div class="relative w-full max-w-sm items-center">
      <Input id="search" type="text" placeholder="Search..." class="pl-10" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>
      <Button variant="outline" size="icon">
        <Bell class="w-4 h-4" />
      </Button>
      <Avatar>
        <AvatarImage src="https://mockmind-api.uifaces.co/content/cartoon/26.jpg" alt="@unovue" />
        <AvatarFallback>Ngoc Son</AvatarFallback>
      </Avatar>
  </div>

</template>

<style scoped></style>
