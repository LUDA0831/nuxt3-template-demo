import type {ComponentRenderProxy, Plugin, PropType as VuePropType, VNode, VNodeChild,} from 'vue'

declare global {
    declare interface ViteEnv {
        VITE_APP_ENV: string
        VITE_APP_BASE_URL: string
        VITE_BUILD_COMPRESS: 'gzip' | 'brotli'
        VITE_APP_TITLE:string
    }

    type AnyFunction<T> = (...args: any[]) => T
    type EmitType = (event: string, ...args: any[]) => void
    type LabelValueOptions = {
        label: string
        value: any
        [key: string]: string | number | boolean
    }[]
    type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null
    type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

    interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
        $el: T
    }

    type CustomizedHTMLElement<T> = HTMLElement & T

    type SFCWithInstall<T> = T & Plugin
    // vue
    declare type PropType<T> = VuePropType<T>
    declare type VueNode = VNodeChild | JSX.Element

    export type Writable<T> = {
        -readonly [P in keyof T]: T[P]
    }

    declare type Nullable<T> = T | null
    declare type NonNullable<T> = T extends null | undefined ? never : T
    declare type Recordable<T = any> = Record<string, T>
    declare type ReadonlyRecordable<T = any> = {
        readonly [key: string]: T
    }
    declare type Indexable<T = any> = {
        [key: string]: T
    }
    declare type DeepPartial<T> = {
        [P in keyof T]?: DeepPartial<T[P]>
    }
    declare type TimeoutHandle = ReturnType<typeof setTimeout>
    declare type IntervalHandle = ReturnType<typeof setInterval>

    declare interface ChangeEvent extends Event {
        target: HTMLInputElement
    }

    declare interface WheelEvent {
        path?: EventTarget[]
    }

    interface ImportMetaEnv extends ViteEnv {
        __: unknown
    }

    declare function parseInt(s: string | number, radix?: number): number

    declare function parseFloat(string: string | number): number

    namespace JSX {
        // tslint:disable no-empty-interface
        type Element = VNode
        // tslint:disable no-empty-interface
        type ElementClass = ComponentRenderProxy

        interface ElementAttributesProperty {
            $props: any
        }

        interface IntrinsicElements {
            [elem: string]: any
        }

        interface IntrinsicAttributes {
            [elem: string]: any
        }
    }
}

