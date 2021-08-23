/*
 * @Author: Liang Liang
 * @Date: 2021-08-23 19:56:46
 * @Description: 
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/user',controller.user.create);
  router.get('/api/user',controller.user.index);
  router.get('/api/user/:id',controller.user.detail);
  router.put('/api/user/:id',controller.user.update);
  router.delete('/api/user/:id',controller.user.delete);
};
