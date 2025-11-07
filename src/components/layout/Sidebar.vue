<script setup>
import {ref} from 'vue'
import { Button } from '@/components/ui/button'
import { RouterLink, useRoute } from 'vue-router'

import { House, BanknoteArrowUp, Wallet, NotebookPen, Cog, Menu } from 'lucide-vue-next'


const route = useRoute()
const collapsed = ref(false)

const navItems = [
  {name: 'Dashboard', icon: House, path: '/'},
  {name: 'Income', icon: BanknoteArrowUp, path: '/income'},
  {name: 'Expense', icon: Wallet, path: '/expense'},
  {name: 'Report', icon: NotebookPen, path: '/report'},
  {name: 'Settings', icon: Cog, path: '/settings'},
]

</script>

<template>
  <aside
    :class="[
      'flex flex-col h-screen border-r bg-background transition-all duration-300',
      collapsed ? 'w-16' : 'w-64'
    ]"
  >
    <!--  Header  -->
    <div class="flex items-center justify-center px-4 py-3 border-b">
      <h1 v-if="!collapsed" class="font-bold text-xl">Mini CRM</h1>
      <Button variant="ghost" size="icon" @click="collapsed = !collapsed">
        <Menu class="w-5 h-5"/>
      </Button>
    </div>

    <!--  Navigation  -->
      <nav class="flex-1 mt-4 space-y-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md transition-colors"
          :class="[
            route.path === item.path
              ? 'bg-sky-500 text-primary-foreground'
              : 'hover:bg-muted text-muted-foreground'
          ]"
        >
          <component :is="item.icon" class="w-5 h-5"/>
          <span v-if="!collapsed">{{item.name}}</span>
        </RouterLink>
      </nav>

    <!--  Footer  -->
      <div class="px-4 py-3 border-t text-xs text-muted-foreground text-center">
        <span v-if="!collapsed">© {{ new Date().getFullYear() }} MiniCRM - Ngoc Son</span>
      </div>
  </aside>
</template>

<style scoped></style>
