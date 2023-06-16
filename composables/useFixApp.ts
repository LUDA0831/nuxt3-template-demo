export function useFixApp() {
  // TODO: Remove when https://github.com/vuejs/core/issues/5513 fixed
  const key = ref(0)
  const messages = [
    'Uncaught NotFoundError: Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.', // chromium based
    'NotFoundError: The object can not be found here.', // safari
    'Cannot read properties of null (reading \'parentNode\')',
  ]
  if (typeof window !== 'undefined') {
    // @ts-expect-error using arbitrary window key
    if (!window.__ncvue) {
      window.addEventListener('error', (event) => {
        if (messages.includes(event.message)) {
          event.preventDefault()
          console.warn('Re-rendering layout because of https://github.com/vuejs/core/issues/5513')
          key.value++
        }
      })
    }
    // @ts-expect-error using arbitrary window key
    window.__ncvue = true
  }
  return { key }
}
