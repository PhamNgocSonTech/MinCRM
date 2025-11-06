<template>
  <div class="p-6">
    <Card class="p-2">
      <h2 class="text-2xl font-semibold mb-4">Welcome back 👋</h2>
      <Button>
          <CirclePlus class="w-4 h-4 mr-2"/> Add New Project
      </Button>
    </Card>
  </div>
</template>

<script setup>
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {CirclePlus} from "lucide-vue-next";
</script>
