import DPlayer from 'dplayer'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      player: DPlayer,
    },
  }
})
