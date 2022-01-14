module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_DEVELOPMENT: 'http://localhost:5000',
    API_PRODUCTION: 'https://dtchatapp.herokuapp.com',
    PRODUCTION: false
  },
  env: {
    PUBLIC_FOLDER: 'https://dtchatapp.herokuapp.com/images/'
  }
}
