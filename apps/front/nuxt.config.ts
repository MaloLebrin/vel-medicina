import Components from 'unplugin-vue-components/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { type PluginOption } from 'vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { pageTransition: { name: 'page', mode: 'out-in' } },

  build: {
    transpile: [
      'vue-toastification',
    ],
  },

  modules: [
    '@pinia/nuxt',
  ],

  vite: {
    plugins: [
      Components({
        resolvers: [
          name => {
            if (name.includes('IconSolid')) {
              const realName = name.split('Solid')[0]
              return `@heroicons/vue/24/solid/esm/${realName}.js`
            }
            if (name.includes('IconOutline')) {
              const realName = name.split('Outline')[0]
              return `@heroicons/vue/24/outline/esm/${realName}.js`
            }
          },
        ],
        include: [/\.vue$/, /\.vue\?vue/],
        extensions: ['vue'],
      }),

      visualizer() as PluginOption,
    ],
  },

})
