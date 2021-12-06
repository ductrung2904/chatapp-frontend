import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION ? 'heroku' : 'http://localhost:5000'
