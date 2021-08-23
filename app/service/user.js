/*
 * @Author: Liang Liang
 * @Date: 2021-08-23 20:11:32
 * @Description: 
 */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async create(payload) {
        const {
            ctx
        } = this;
        return ctx.model.User.create(payload);
    }
    async index() {
        const { 
            ctx
        } = this;
        return ctx.model.User.find();
    }
    async detail(_id){
        const { 
            ctx
        } = this;
        return ctx.model.User.findById(_id)
     }
     async update(_id, payLoad) {
        const { 
            ctx
        } = this;
        return ctx.model.User.findByIdAndUpdate(_id,payLoad);
    }
    async delete(_id){
        const { 
            ctx
        } = this;
        return ctx.model.User.findByIdAndDelete(_id);
    }
}

module.exports = UserService;
