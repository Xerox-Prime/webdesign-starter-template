// postcss-preset-env.d.ts
declare module 'postcss-preset-env' {
  import { PluginCreator } from 'postcss';
  const plugin: PluginCreator<unknown>;
  export default plugin;
}
