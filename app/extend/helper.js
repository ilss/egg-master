/*
 * @Author: Liang Liang
 * @Date: 2021-08-25 21:11:22
 * @Description: 框架扩展
 */
module.exports = {
    success: ({res=null})=> {
        // this是helper对象，在其中可以调用其他的helper方法
        // this.ctx =>context对象
        // this.app =>application对象
        this.ctx.body = {
            code:200,
            data:res
        }
        this.ctx.status = 200;
    },
    msg: ({msg='请求成功'})=> {
        this.ctx.body = {
            code:200,
            msg
        }
        this.ctx.status = 200;
    }
}