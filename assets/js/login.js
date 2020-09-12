$(function() {
    // 点击注册账号让登录隐藏注册显示
    $('#link_reg').on('click',function() {
        $('#form_login').hide();
        $('#form_reg').show();
    })
    // 点击去登陆让注册页面隐藏登录页面显示
    $('#link_login').on('click',function() {
        $('#form_login').show();
        $('#form_reg').hide();
    })
})