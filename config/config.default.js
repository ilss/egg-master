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
      enable: false
    }
  }
  
  config.cacheTick = {
    interval: '5s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
    immediate: true, //配置了该参数为 true 时，这个定时任务会在应用启动并 ready 后立刻执行一次这个定时任务
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1629719800786_9268';

  config.mongoose = {
    url: "mongodb://root:root@192.168.1.89:27017/egg-test",
    options: {
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  }

 
  // add your middleware config here
  config.middleware = ['errorHandler']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
