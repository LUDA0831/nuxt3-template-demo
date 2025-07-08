<script setup lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
  NavigationMenuLink,

  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuLinkProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuLink
    data-slot="navigation-menu-link"
    v-bind="forwarded"
    :class="cn(`
      'data-[active=true]:focus:bg-accent
      flex flex-col gap-1 rounded-sm p-2 text-sm ring-ring/10 outline-ring/50
      transition-[color,box-shadow]
      [&_svg:not([class*='size-'])]:size-4'
      hover:bg-accent hover:text-accent-foreground
      focus:bg-accent focus:text-accent-foreground
      focus-visible:ring-4 focus-visible:outline-1
      data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground
      data-[active=true]:hover:bg-accent
      dark:ring-ring/20 dark:outline-ring/40
      [&_svg:not([class*='text-'])]:text-muted-foreground
    `, props.class)"
  >
    <slot />
  </NavigationMenuLink>
</template>
