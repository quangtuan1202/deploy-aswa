import developmentConfigs from './env/development.json';
import productionConfigs from './env/production.json';

/**
 * Load the environment configuration with specific environment such as production
 */
class Config {
  constructor() {
    console.log(process.env.NODE_ENV)
    // Load the environment configuration
    if (process.env.NODE_ENV === 'development') {
      this.config = developmentConfigs;
    } else if (process.env.NODE_ENV === 'production') {
      this.config = productionConfigs;
    }
  }

  /**
   * Get the current environment configuration object which is loaded in the load() function
   * @return {object}
   */
  getConfig() {
    return this.config;
  }

  getUnauthorizeEndpoint() {
    return this.config.UnauthorizeEndpoint;
  }

  getAuthorizeEndpoint() {
    return this.config.AuthorizeEndpoint;
  }
}

export default new Config();
