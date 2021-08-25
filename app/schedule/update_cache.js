/*
 * @Author: Liang Liang
 * @Date: 2021-08-25 21:23:31
 * @Description: 定时任务
 */
module.exports = app => {
    return {
        schedule: app.config.cacheTick,
        async task(ctx) {
            const res = await ctx.curl('https://free-api.heweather.net/s6/weather/now?location=beijing&key=4693ff5ea653469f8bb0c29638035976', {
                dataType: 'json',
            });
            ctx.app.cache = res.data;
        }
    }
};