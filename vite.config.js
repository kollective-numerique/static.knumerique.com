const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        agence: resolve(__dirname, 'src/agence.html'),
        apropos: resolve(__dirname, 'src/apropos.html'),
        blog: resolve(__dirname, 'src/blog.html'),
        academie: resolve(__dirname, 'src/academie.html'),
      },
    },
  },
  server: {
    port: 8080
  }
}