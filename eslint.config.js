import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
}, {
  ignores: ['public/mockServiceWorker.js'],
})
