/// <reference types="@rsbuild/core/types" />

declare namespace NodeJS {
    interface ProcessEnv {
        PUBLIC_APP_TITLE: string;
        PUBLIC_LOCAL_STORAGE_THEME_KEY: string
    }
}