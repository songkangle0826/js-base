import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter,Route,Switch,Redirect } from 'react-router-dom';

import A from './component/A'
import B from './component/B'
import C from './component/C'
/*
 HashRouter
 	1.当前项目中一旦使用HSAH-ROUTER，则默认载页面的地址后面加上“#”，也就是HASH默认值是一个斜杠，我们一般让其显示首页信息内容
	
	2.Hash-router中只能出现一个子元素

	3.HASH-ROUTER机制中，我们需要根据哈希地址不同，展示不同的组件内容，此时需要使用ROUTE

 ROUTE
 	PATH: 匹配哈希后面的值（地址）  设置匹配地址，但不是严格匹配，当前页面哈希地址只要包含完整的它(内容时不变的，都能被匹配上)
 		PATH= '/': 和它匹配的地址只要由/即可（都能匹配）
 		PATH='/user': "#/user/login"也可以匹配，但是”#/suer2“这个无法匹配

 	COMPONENT： 一旦哈希值和当前route的payh相同了，则渲染COMPONENT指定的组件


    #/user/login => /  /user
    #/user2      => /  /user就无法匹配了 

	EXACT 让path的匹配严谨和严格一些（只要URL哈希值和PATH设定的之相等才可以匹配到）
			PATH= '/': "#/"匹配  "#/user/"就不再匹配了

	STRICT 
	 	不常用

	RENDER: 当页面的哈希地址和PATH匹配，会把RENDER规划的方法执行，在方法中一样做”权限校验“，渲染组件前验证是否存在权限校验，不存在做一些特殊处理
  

	------
	默认情况下，会和每一个ROUTE都做校验（哪怕之前已经有校验成功的）,SWITCH可以解决这个问题，只要有一种情况校验成功，就不再向后校验了


  SWITCH

*/

// ReactDOM.render(<HashRouter>
// 	<div>
// 		<Route path="/" exact component={ A } />
// 		<Route path="/user" component={ B }/>
// 		<Route path="/pay" render={()=>{
// 			//=>一般在RENDER中处理的是权限校验
// 			let flag = localStorage.getItem("FLAG");
// 			if(flag && flag === 'SAFE' ){
// 				return <C />;
// 			}
// 			return '不安全，不利于支付';
// 		}} />
// 	</div>
// </HashRouter>,document.getElementById('root'))


/*
 * Link: 是react-router中提供得路由切换组件，基于它可以实现点击得时候路由切换
 	  to 【string】 跳转到指定得路由地址
 	  to 【Object】 可以提供一些参数配置项（和Redirect类似）
 	  	{
			PATHNAME: 跳转地址
			SERACH: 问号传参
			STATE： 基于这种方式传递信息
			
 	  	}
 	  replace： FALSE（默认值）是替换HISTORY， STACK中当前得地址（TRUE，还是追加一个新得地址（FALSE））
	
	原理： 基于LINK组件渲染，渲染后的结果就是一个a标签，To对应的信息最后变为HERF中的内容
		<a href='#/?lx-logo'></a>

	-------------

	react-router中提供的组件都要在任何一个Router包裹的范围内使用
 *
 * NAVLINK: 和LINK类似，都是为了实现路由跳转的，不同在于，NAVLINK组件在当前页面HASH和组件对应地址吻合的时候，会默认给组件加一个actived样式，让其有选中效果后的A标签的设置默认样式类：active
	和link类似，TO和REPLACE的属性
	to 【string】
	to 【object】 
	activeClassName ： 把默认加的active样式改成自己的
	activeStyle: 给匹配的这个NAVLINK设置行内样式

	exact && strict 控制匹配的时候是否为严格匹配

	isActive ：匹配后执行一个函数

	<NavLink to='/custom' activeClassName=>最后也会转换为A标签，如果当前页面的为HASH地址和组件中的TO地址匹配了，则会给渲染后的a
*/

/*
 * withRouter: 这个方法的意思是把一个非路由管控组件，模拟称为路由管控的组件
  <Router path='' component={}>
  
  with-router(connect()(NAV)) 先把基于connect高阶一下，返回的是一个代理组件PROXY，把返回的组件受路由管控
  
 * 受路由管控组件的一些特点
  1.只有当前页面的哈希地址（/#/../..）和路由指定的地址（path）匹配，才会把对用的组件渲染
  with-Router是没有地址匹配，都被模拟称为受路由管控的
  2.路由切换的原理，凡是匹配的路由，都会把对应得组件内容重新添加到页面中，相反，不匹配得都会在页面中移除掉，下一次重新匹配上，组件需要重新渲染到页面中。每一次路由切换得时候，页面得哈希路由地址改变，都会从一级路由开始重新校验一遍。
  3.所有受路由管控得组件，在组件得属性Props上都默认添加了三个属性：
    HISTORY
      PUSH 向池子中追加一条新的信息，达到切换到指定路由地址得目的
        this.props.hsitory.push("/plan") js中实现路由切换
      GO 跳转到指定得地址（传得是索引 0当前 -1 上一个 -2上两个）
      GO-BACK <=> go(-1) 回退到上一个地址
      GO-FORWARD  <=> go(1) 先前走一步
      ....
    LOCATION 获取当前哈希路由渲染组件得一些信息
      hash
      pathname 当哈希路由地址
      search  当前页面问号传参值 ?lx=unsafe
      state   基于REDIRECT/Link/NAVLINK的TO，传递的是一个对象，对象中编写的STATE，就可以在LOCALTION.state中获取到
    MATCH 获取当前路由匹配的结果
      isExact: false  //是否为严格匹配
      path: "/"
      url: "/"
      params: {}: 如果当前路由匹配的是地址参数，则这里可以获取传递的参数值
*/



ReactDOM.render(<HashRouter>
	<Switch>
		<Route path="/" exact component={ A } />
		<Route path="/user" component={ B }/>
		<Route path="/user/login" component={ C }/>
		<Route path="/pay" component={ C } />
		{/* 上述都设置完成后，会在末尾设置一个匹配：以上都不符合的情况下，我们认为路由地址是非法的地址，我们做一些特殊处理,ROUTER不设置PATH */}
		{/*<Route render={()=>{
			return <div>404</div>
		}} />*/}
		{/* 也可以才有Redirect重定向 to要定向到哪 
			TO { string }: 重新定向的新的地址
			TO { object }: 重新定向到新的地址，只不过指定了更多信息
				{
					pathname: 定向的地址
					SEARCH：给定向的地址问号传参(结合真实项目中，我们可能会根据是否存在参数值来统计是正常进入首页还是非正常跳转过来的，也有可能跟问号传参的值做不同的事情)
					STATE: 给定向后的组件传递一些信息
				}
			PUSH 如果设置了这个属性，当前跳转的地址会加入HISTORY STACK中一条记录
			FROM 你是从那里来
				<Redirect from='/custom' to='/custom/list' />
				如果当前请求的HASH地址是”/custom“，如果让我们其重定向”/custom/list“
		*/}
		<Redirect to='/>lx=404' />
		<Redirect to={ {
			pathname: '/',
			search: '?lx=404',
		} } />

	</Switch>
</HashRouter>,document.getElementById('root'))


/*
 * 单页面应用（SPA：single page web application）
 	只有一个页面，所有需要展示的内容都在这一个页面中实现切换，webpack只需要配置一个入口即可（移动端单页面应用居多，或者PC端管理系统）
 *
 *
 * 多页面应用（MPA： multi page web application）
 	一个项目由多页面组成，使用这个产品，主要就是页面之间的跳转（PC端多页面应用居多）：基于框架开发的时候，需要在webpack中配置多个入口，每一个入口对应一个页面
 * 

 * 如何实现单页面应用
 *	1.如果项目是基于服务器渲染的，后台语言中可以基于“include”等技术，把很多部分拼凑在一起，实现组件化或者插件化开发，也可以实现单页面应用
 *
 *  2.基于IFRAME实现单页面应用
 *
 *  3.模块化开发
 		AMD： REQUIRE.js
 		CMD : SEA.js
		基于这些思想把每一部分单独写成一个模块：最后基于GULP/FIS等自动化工具，最后把所有的模块都合并都首页页面中(包括HTML，css，js都合并在一起)，通过控制哪些模块的显示隐藏来实现单页面应用开发
 		
 		弊端：由于首页中的内容包含了所有模块内容，所以第一次加载速度很慢（虽然可以解决，但是相对于来说比较麻烦）

 *  4. 基于VUE/REACT实现模块化组件化开发,基于他们实现的路由实现SPA单页面应用，基于WEBPACK打包等（）
 *
*/

/*
  react-router-dom 实现SPA单页面应用
	yarn add react-router-dom

	3. BrowserRouter VS HashRouter
	它是两种常用的路由实现思想，BrowserRouter浏览器路由，
	【BrowserRouter】
		它是基于H5中的history API （pushState，peplaceState，popstate）来保持UI和URL的同步
			真实项目中应用的不多，一般只有单前项目是基于服务端渲染的，我们才会使用浏览器路由
			http://www.demo.com/
			http://www.demo.com/personal/
			http://www.demo.com/personal/login
	【HashRouter】
		真实项目中（前后端分离项目），我们经常使用哈希路由来完成的，他依据相同的页面地址，不同的哈希值，来规划当前页面中的哪一个组建呈现渲染，它基于原生JS构造了一套类似于history API的机制，每一次路由切换都是基于history stack（历史栈）完成的！
			http://www.demo.com/
			http://www.demo.com/#/personal
			http://www.demo.com/#/personal/login
*/	
