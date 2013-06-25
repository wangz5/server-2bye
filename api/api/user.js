resources.push({
    name: "USER",
    operations: [
        {
            notes: "用户注册",
            path: "/user/register",
            http_method: "post",
            format: "json",
            description: "提交用户注册信息",
            parameters: [
                /*
                {
                    parameter: "mobile",
                    value: "13804128888",
                    description: "手机号码",
                    data_type: "string"
                },
                {
                    parameter: "password",
                    value: "peter222",
                    description: "用户密码",
                    data_type: "string"
                },
                {
                    parameter: "birthday",
                    value: "1984/08/08",
                    description: "生日",
                    data_type: "string"
                },
                {
                    parameter: "usertype",
                    value: "business",
                    description: "用户类型 business / individual",
                    data_type: "string"
                },
                */
                {
                    parameter: "info",
                    value: '{mobile:"13804128888",password:"peter222",birthday:"1984/08/08",usertype:"business"}',
                    value_type: 'textarea',
                    description: "用户注册基本资料",
                    data_type: "json"
                },
                {
                    parameter: "picture",
                    value: "",
                    value_type:"file",
                    description: "form-data中媒体文件标识，有filename、filelength、content-type等信息",
                    data_type: "bytes"
                }
            ],
            response: {
                data: '{code:"1",errcode:"1"}',
                description: 'errcode : 返回错误码,</br>code : 返回值，0-成功，非0-失败'
            },
            return_code: [
                 {
                     errcode: 10001,
                     msg: "用户名已被使用",
                 },
                 {
                     errcode: 10002,
                     msg: "手机号码已被使用",
                 },
                 {
                     errcode: 10003,
                     msg: "邮箱已被使用",
                 },
                 {
                     errcode: 10004,
                     msg: "帐户为空",
                 },
                 {
                     errcode: 10005,
                     msg: "密码为空",
                 },
                 {
                     errcode: 10005,
                     msg: "帐户名或密码出错",
                 }
            ]
        },
        {
            notes: "用户登录",
            path: "/user/login",
            http_method: "post",
            format: "json",
            description: "用户登录信息接口",
            parameters: [
                {
                    parameter: "mobile/email/account",
                    value: "13804128888",
                    value_type:"text",
                    description: "手机/邮箱/账号名",
                    data_type: "string"
                },
                {
                    parameter: "password",
                    value: "123456",
                    value_type: "text",
                    description: "密码",
                    data_type: "string"
                }
            ],
            response: {
                data: '{code:"1","tokenid": "dfc7ad3884e7",errcode:"10001"}',
                description: 'errcode : 返回错误码,</br>code : 返回值，0-成功，非0-失败'
            },
            return_code: [
                 {
                     errcode: 10001,
                     msg: "用户名不存在",
                 },
                 {
                     errcode: 10001,
                     msg: "密码错误",
                 }
            ]
        },
        {
            notes: "用户退出",
            path: "/user/logout",
            http_method: "post",
            format: "json",
            description: "用户退出/注销操作接口",
            parameters: [
                {
                    parameter: "tokenid",
                    value: "dfc7ad3884e7",
                    value_type: "text",
                    description: "token id",
                    data_type: "string"
                }
            ],
            response: {
                data: '{code:"1"}',
                description: 'code : 返回值，0退出失败,1退出成功'
            },
            return_code: [
          
            ]
        }
    ]
});