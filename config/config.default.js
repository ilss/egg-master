/*
 * @Author: Liang Liang
 * @Date: 2021-08-23 19:56:46
 * @Description: 
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.security = {
    csrf: {
      enable:false
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1629719800786_9268';

  config.mongoose = {
    url: "mongodb://root:root@192.168.1.89:27017/egg-test",
    options:{
        useUnifiedTopology: true,
        useCreateIndex:true
    }
}

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
