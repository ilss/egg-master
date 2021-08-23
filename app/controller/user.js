/*
 * @Author: Liang Liang
 * @Date: 2021-08-23 20:07:53
 * @Description: 
 */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const {
        ctx,
        service
      } = this;
      const payLoad = ctx.request.body || {};
      const res = await service.user.create(payLoad);
      ctx.body = {
        code:200,
        data: res
      };
  }
  async index() {
    const {
        ctx,
        service
    } = this;
    const res = await service.user.index();
    ctx.body = {
      code:200,
      data:res
    };
  }
  async detail() {
    const {
      ctx,
      service
    } = this;
    const {id} = ctx.params;
    const res = await service.user.detail(id);
    ctx.body = {
      code:200,
      data:res
    };
  }
  async update() {
    const {
      ctx,
      service
    } = this;
    const {id} = ctx.params;
    const payLoad = ctx.request.body;
    // 调用 Service 进行业务处理
    await service.user.update(id, payLoad);
    // 设置响应内容和响应状态码
    ctx.body = {code:200,data:'修改用户成功'};
  }
  async delete() {
    const {
      ctx,
      service
    } = this;
    const {id} = ctx.params;
     // 调用 Service 进行业务处理
    await service.user.delete(id);
     // 设置响应内容和响应状态码
    ctx.body = {code:200,data:"删除用户成功"};
  }
}

module.exports = UserController;
