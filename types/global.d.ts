declare global {
  interface ViteEnv {
    VITE_APP_ENV: string
    VITE_APP_BASE_URL: string
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli'
    VITE_APP_TITLE: string
  }

    type AnyFunction<T> = (...args: any[]) => T
    type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null
    type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

    interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
      $el: T
    }

    type Nullable<T> = T | null
    type NonNullable<T> = T extends null | undefined ? never : T
    type Recordable<T = any> = Record<string, T>
    type TimeoutHandle = ReturnType<typeof setTimeout>
    type IntervalHandle = ReturnType<typeof setInterval>
}
export {}
