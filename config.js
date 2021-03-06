import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT;
