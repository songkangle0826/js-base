// 
import axios from 'axios';
import Qs from 'qs';

axios.defaults.baseURL = 'http://localhost:8000';
// 是否允许跨域并且允许携带cookie
axios.default.withCredentials = true;
// 把POST/PUT请求主体传递给服务器的内容统一处理为x-www-url-encode格式
axios.default.transformRequest = (data={})=> Qs.stringify(data);
// 响应拦截器:把服务器返回的信息中的主体内容拦截,以后在THEN中获取的结果是主体内容
axios.interceptors.response.use(result => result.data);

export default axios;