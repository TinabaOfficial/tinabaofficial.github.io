declare module "@11ty/eleventy" {
    export interface UserConfig {
        addPassthroughCopy(...args: unknown[]): void;
        addWatchTarget(...args: unknown[]): void;
    }
}

declare module "eslint-config-eslint" {
    const config: readonly unknown[];

    export default config;
}
