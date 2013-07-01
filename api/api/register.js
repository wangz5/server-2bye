resources.push({
    name: "register",
    operations: [
        {
            notes: "验证手机号码",
            path: "/register/verify_mobile",
            http_method: "post",
            format: "json",
            description: "验证手机号码",
            parameters: [
                {
                    parameter: "mobile",
                    value: '13804128888',
                    value_type: 'text',
                    mandatory:'yes',
                    description: "手机号码",
                    data_type: "string"
                }
            ],
            response: {
                data: '{ret:1,errcode:10001}',
                description: 'errcode : 返回错误码,</br>ret : 返回值，0 手机号码可以注册，1 手机号码无法注册'
            },
            return_code: [
                 {
                     errcode: 10001,
                     msg: "手机号码已经被使用",
                 },
                 {
                     errcode: 10002,
                     msg: "手机号码已被禁用",
                 }
            ]
        },//register
        {
            notes: "校对手机验证码",
            path: "/register/verify_mobile_code",
            http_method: "post",
            format: "json",
            description: "验证手机号码",
            parameters: [
                {
                    parameter: "code",
                    value: '13804128888',
                    value_type: 'text',
                    mandatory:'yes',
                    description: "验证码",
                    data_type: "string"
                }
            ],
            response: {
                data: '{ret:1,errcode:10001}',
                description: 'errcode : 返回错误码,</br>ret : 返回值，0 验证码正确，1 验证码错误'
            },
            return_code: [
                 
            ]
        },//register
        {
            notes: "用户注册",
            path: "/register/add_user",
            http_method: "post",
            format: "json",
            description: "提交用户注册信息",
            parameters: [
                {
                    parameter: "info",
                    value: '{mobile:"13804128888",password:"peter222",birthday:"1984/08/08",usertype:"business"}',
                    value_type: 'textarea',
                    mandatory:'yes',
                    description: "用户注册基本资料",
                    data_type: "json"
                }
            ],
            response: {
                data: '{ret:1,errcode:10001}',
                description: 'errcode : 返回错误码,</br>ret : 返回值，0-成功，1-失败'
            },
            return_code: [
                 {
                     errcode: 10001,
                     msg: "用户名已被使用",
                 },
                 {
                     errcode: 10002,
                     msg: "帐户为空",
                 },
                 {
                     errcode: 10003,
                     msg: "密码为空",
                 },
                 {
                     errcode: 10004,
                     msg: "帐户名或密码出错",
                 }
            ]
        }//register
        
    ]
});