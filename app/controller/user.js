/*
 * @Author: Liang Liang
 * @Date: 2021-08-23 20:07:53
 * @Description: 
 */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  constructor(props) {
    super(props);
    this.UserCreateRule = {
      username: {
        type: 'string',
        required: true,
        allowEmpty: false,
        // 用户名必须是3-10位之间的字母、下划线、@、. 并且不能以数字开头
        format: /^[A-Za-z_@.]{3,10}/
      },
      password: {
        type: 'password',
        require: true,
        allowEmpty: false,
        min: 6
      }
    }
  }
  async create() {
    const {
        ctx,
        service
      } = this;
      ctx.validate(this.UserCreateRule);
      const payLoad = ctx.request.body || {};
      const res = await service.user.create(payLoad);
      ctx.helper.success({
        res
      })
  }
  async index() {
    const {
        ctx,
        service
    } = this;
    const res = await service.user.index();
    ctx.helper.success({
      res
    })
  }
  async detail() {
    const {
      ctx,
      service
    } = this;
    const {id} = ctx.params;
    const res = await service.user.detail(id);
    ctx.helper.success({
      res
    })
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
    ctx.helper.msg({
      msg:"修改用户成功"
    })
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
    ctx.helper.msg({
      msg:"删除用户成功"
    })
  }
}

module.exports = UserController;
