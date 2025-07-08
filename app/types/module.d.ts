import type DPlayer from 'dplayer'

declare module '#app' {
  interface PageMeta {
    title: string
  }
  interface NuxtApp {
    $player: DPlayer.DPlayer
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
