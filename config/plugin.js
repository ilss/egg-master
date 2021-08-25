/*
 * @Author: Liang Liang
 * @Date: 2021-08-23 19:56:46
 * @Description: 插件
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  mongoose:{
      enable: true,
      package: 'egg-mongoose',
    },
    validate:{
      enable: true,
      package: 'egg-validate',
    }
};
