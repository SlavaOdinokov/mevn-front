module.exports = {
  devServer: {
    port: process.env.VUE_PORT
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
}
