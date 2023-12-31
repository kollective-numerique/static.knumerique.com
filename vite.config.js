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
        service: path.resolve(__dirname, 'src/service.html'),
        detailFormation: path.resolve(__dirname, 'src/detailFormation.html'),
        formations: path.resolve(__dirname, 'src/formations.html'),
        detailRealisation: path.resolve(__dirname, 'src/detail-realisation.html'),
        realisation: path.resolve(__dirname, 'src/realisation.html'),
      },
    },
  },
  server: {
    port: 8080
  }
}