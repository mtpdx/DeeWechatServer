
'use strict'

var Koa = require('koa')
var path = require('path')
var wechat = require('./wechat/g')
var util = require('./libs/util')
var wechat_file = path.join(__dirname, './config/wechat.txt')
var config = {
    wechat:{
        appID: '',
        appSecret: '',
        token: '',
        getAccessToken: function(){
            return util.readFileAsync(wechat_file)
        },
        saveAccessToken: function(data){
            data = JSON.stringify(data)
            return util.readFileAsync(wechat_file, data)
        },
    }
}

var app = new Koa()

app.use(wechat(config.wechat))

app.listen(3000)
console.log('listening 3000')