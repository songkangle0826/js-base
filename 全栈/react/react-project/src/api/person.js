// 个人中心的所以请求

import axios from './index';




// => 验证是否登录
export function checkLogin(){
	return axios.get('/personal/login');
}


export function exitLogin(){
	return axios.get('/personal/exitLogin');
}


// 获取个人信息的
export function queryInfo(){
	return axios.get('/personal/info');
}


// => 登录 
export function login(payload){
	return axios.post('/personal/login',payload);
}

// => 注册
export function register(payload){
	return axios.post('/personal/register',payload);
}