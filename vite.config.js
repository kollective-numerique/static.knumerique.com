const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        agence: path.resolve(__dirname, 'src/agence.html'),
        apropos: path.resolve(__dirname, 'src/apropos.html'),
        blog: path.resolve(__dirname, 'src/blog.html'),
        academie: path.resolve(__dirname, 'src/academie.html'),
      },
    },
  },
  server: {
    port: 8080
  }
}