<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '~/components/ui/navigation-menu'

const router = useRouter()

const routerList = computed(() => router.getRoutes().map(item => ({ to: item.path, name: item.meta.title ?? item.name })).reverse())
</script>

<template>
  <div>
    <div class="border-b">
      <div class="mx-auto flex w-[1200px] space-x-4 p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="nav in routerList" :key="nav.name">
              <nuxt-link
                v-slot="{ isActive, href, navigate }" :to="nav.to" custom exact class="
                  hover:text-primary
                "
              >
                <NavigationMenuLink
                  :href :active="isActive" :class="[navigationMenuTriggerStyle(), isActive && `
                    !text-primary
                  `]" @click="navigate"
                >
                  {{ nav.name }}
                </NavigationMenuLink>
              </nuxt-link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
