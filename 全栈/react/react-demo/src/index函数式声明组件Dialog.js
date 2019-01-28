import React from 'react';
import ReactDOM from 'react-dom';
/* 
 * 1.我们一般都把程序中的公用样式放到index中导入，这样在其他组件中也可以使用了（webpack会把所有的组件最后编译到了一起，INDEX是主入口）
 * 2.导入bootstrap，需要导入的是不经过压缩处理的文件，否则无法编译
*/ 
import 'bootstrap/dist/css/bootstrap.css';
import Dialog from './component/Dialog'


ReactDOM.render(<div>
	<Dialog content='代码写错了' />
	<Dialog  type={ 2 } content='代码qqq' />
	<Dialog  type='请登录' content={
		<div>
			<input type='text' className='form-control' placeholder='请输入用户名' /><br/>
			<input type='password' className='form-control' placeholder='请输入密码' />
		</div>
	}>
		<button className='btn btn-success'>登录</button>
		<button className='btn btn-danger'>取消</button>
	</Dialog>
</div>,document.getElementById('root'))