import Mock from 'mockjs';
Mock.mock('/api/user/login',{
    'status' : 0,
    'data' : {
        'id' : 1,
        'username' : 'xiaoting',
        'age' : 27
    }
})
Mock.mock('/api/user/logout',{
    'status' : 11,
    'data' : {
        'id': 2,
        'username' : 123,
        'age' : 33
    }
})