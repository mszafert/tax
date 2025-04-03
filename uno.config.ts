import {
  defineConfig,
  presetWind4,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,ts}'],
  },
  presets: [presetWind4()],
  rules: [
    ['inset-shadow-2xl', {'box-shadow': 'inset 0 0 100px 0 rgba(0,0,0,.25)'}],
  ],
  transformers: [transformerDirectives()],
})
