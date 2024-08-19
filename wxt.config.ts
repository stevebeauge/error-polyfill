import { nodePolyfills } from "vite-plugin-node-polyfills";
import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  runner: {
    disabled: true,
  },
  vite: () => ({
    plugins: [nodePolyfills()],
  }),
});
