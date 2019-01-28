// React是FaceBook (脸书)公司研发的一款js框架（MVC）
1.React的脚手架
   react是一款框架，具备自己开发的独立思想（MVC：model view controller）
   ->  划分组件开发
   ->  基于路由的SPA单页面开发
   ->  基于es6来编写代码（最后部署上线的时候，我们需要把ES6编译成ES5，基于Babel来完成编译）
   ->  可能用到Less/Sass等，我们也需要使用对应的插件把他们进行预编译
   ->  最后为了优化性能（减少HTTP请求次数），我们需要把js或者css进行合并压缩
   ->  webpack来完成以上页面组件合并，js/css编译合并等工作


   前端工程化开发：
       ->  基于框架的组件化开发/模块化开发
       ->  基于webpack的自动部署

    但是配置webpack是一个相对复杂的工作，我们需要安装很多的包，还需要自己写相对复杂的配置文件...如果我们有一个插件，基于它可以快速构建一套完整的自动化工程项目结构，那么有助于提高开发的效率 =>  "脚手架"
        vue:  vue-cli
        react: create-react-app


【create-react-app的使用】
  >  $ npm install create-react-app -g   //把模块安装在全局环境下（目的：可以使用命令），mac电脑安装的时候需要加sudo ,否则没有权限
  >  $ create-react-app [项目名称]   //基于脚手架命令，创建出一个基于react的自动化/工程化项目目录，和npm发包的时候命名规范一样，项目名称中不能踹下你：大写字母，中文汉字，特殊符号（-或者_是可以的）等


  【脚手架生成目录中的一些内容】
       node-modules  当前项目中依赖的包都安装在这里
           .bin  本地项目中可执行命令，在package.json的scripts中配置对应的脚本即可（其中有一个就是：react-scripts命令）

           public 存放的是当前项目的HTML页面（单页面应用放一个index.html即可，多页面根据自己需求放置需要的页面）

              
    //   在react框架中，所有的逻辑都是在js中完成的（包括页面结构的创建），如果想给当前的页面导入一些css样式或者img图片等内容，我们有两种方式：
    //   1.在js中基于ES6 module 模块规范，使用import导入，这样webpack在编辑合并js的时候，会把导入的资源文件等插入到页面的结构中（绝对不能在js管控的结构中通过相对目录./或者../导入资源，因为在webpack编译的时候，地址就不在是之前的相对地址了）
    //   2.如果不想在js中导入（js中导入的资源最后都会基于webpack编译），我们也可以把资源手动的在HTML导入，但是HTML最后导入也要基于webpack编译，导入的地址也不建议写相对地址，而是使用%PUBLIC_URL%写成相当地址
    
    // <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

      src  项目结构中最主要的目录，因为后期所有的js，路由，组件等都是放在这里面（包括需要编写的css或者图片等）
          index.js  是当前项目的入口文件
          .gitiginore git提交的时候忽略提交文件配置项

          package.json  当前项目的配置清单
                dependencies   //生产依赖 基于脚手架生成工程目录，自动帮我们安装了三个模块
                  react-scripts  集成了webpack需要的内容
                   -> babel 一套
                   -> css处理一套
                   -> eslint 一套
                   -> webpack一套
                   -> 其他的
                  没有less/sass的处理内容（项目中使用less，我们需要自己额外的安装）

      // "scripts": {
      //   "start": "react-scripts start",
      //   "build": "react-scripts build",
      //   "test": "react-scripts test",
      //   "eject": "react-scripts eject"
      // },

      可执行的脚本  “$ npm run start / $ yarn start”
          start:  开发环境下，基于webpack编译处理，最后可以预览当前开发的项目成果（在webpack当中安装了dev-server插件，基于这个插件会自动创建一个web服务【端口号默认是3000】，webpack会帮我们自动打开浏览器，并且展示我们的页面，并且能够监听我们代码的改变，如果代码变了，webpack会自动重新编译，并且刷新浏览器来完成重新渲染）
          build:  项目需要部署到服务器上，我们先执行yarn build，把项目整体编译打包（完成后会在项目中生成一个build文件夹，这个文件夹中包含了所有编译后的北荣，我们把它上传到服务器即可），而且在服务器上进行并部署的时候不需要安装任何模块，因为webpack已经把需要的内容都打包到一个js中了



2.react脚手架的深入剖析
  create-react-app脚手架为了让结构目录清晰，把安装的webpack及配置文件都集成在了react-scripts模块中，放到了node-modules中
  但是真实项目中，我们需要在脚手架默认安装的基础上，额外安装一些我们需要的模块，例如：react-router-dom/axios... 在比如：less/less-loader...
  情况一：如果我们安装其他的组件，但是安装成功后不需要改变webpack的配置项，此时我们直接的安装，并且调取使用即可
  情况二：我们安装的插件是基于webpack处理的，也就是需要把安装的模块配置到webpack中（重新修改webpack配置项了）
      ->  首先需要把隐藏到node-modules中的配置项暴露到项目中
        =>  $ yarn eject / npm eject 
            首先会提示确认是否执行eject操作，这个操作是不可逆的，一旦暴露出来配置项，就无法隐藏回去了

            如果当前是基于git管理，在执行eject的时候，如过还没有提交到历史区的内容，需要先提交到历史区，然后在eject才可以，否则报错。

      ->  再去修改对应的配置项即可 
          一旦暴露后，项目中多了两个文件夹：
            config  存放在webpack的配置文件
               webpack.config.dev.js   //开发环境下的配置项（yarn start）  
               webpack.config.prod.js   //生产环境下的配置项(yarn build)


            scripts 存放的是可执行脚本的js文件
               start.js  yarn start执行的就是这个js
               build.js  yarn build执行的就是这个js

      package.json 中的内容也改了

       【举个例子：需要安装less】   
            $ yarn add less less-loader

            less是开发和生产环境下都需要配置的  
            {
               test:/\.less$/,
               loader:require.resolve("less-loader") 
            }   

  我们预览项目的时候，也是基于webpack编译，把编译后的内容放到浏览器中运行，所以如果项目中使用了less，我们需要修改webpack配置项，在配置项中加入less的编译工作，这样后期预览项目，首先基于webpack把less编译为css，然后呈现在页面中


  $ set HTTPS=true&&yarn start   //开启https协议模式（设置环境变量HTTPs的值）
  $ set PORT=786786  //修改端口号

==============================
2. react 和 react-dom
  渐进式框架: 一种最流行的设计思想，一般框架中都包含很多内容，这样会导致框架的体积臃肿，拖慢加载速度。真实项目中，我们使用一个框架，不一定使用全部的功能，此时我们应该把框架的功能进行拆分，用户想要什么，让其自己自由组合即可。
  全家桶：渐进式框架n多部分组合
    vue全家桶：vue-cli vue vue+router vuex axios(fetch) vue-element(vant) 
    react全家桶：create-react-app react react-dom react-router-dom redux react-redux axios(fetch) antd  dva/saga/mobx...

    1.react: REACT的核心部分，提供了Component类可以供我们进行组件开发，提供了钩子函数（生命周期函数--所有的生命周期函数都是基于回调函数完成的）
    2.react-dom：JSX语法（react独有语法）渲染为真实DOM（能够放到页面中展示的解构都为真实DOM）的组件
    在react-dom中提供了Render的方法
    /*
     * RectDOM.render([jsx],[CONTAINER],[CALLBACK]): 把JSX语法渲染到页面中
     *  jsx: react虚拟元素
     *  CONTAINER： 容器，我们想把元素呈现到页面中的哪个容器中
     *  CALLBACK：当把内容呈现到页面中触发的回调函数
     *  
     *  JSX： react的独有语法 js--javascript，x--xml(html)
     *    和我们之前拼接的HTML字符串类似，都是把html结构代码或者数据混在一起了，但是他不是字符串
     *
     *  1.不建议我们把JSX语法直接渲染到BODY中，一般我们都放到一个ID为ROOT的div中
     *  2.在jsx中出现的{ }是存放js的，但是要求js代码执行完成有返回结果（js表达式）
          -》不能直接方一个对象（对象（除了给style赋值），数组（数组中如果没有对象都是基本值或者是JSX元素也行），函数都不行）
          -》可以是基本类型值（布尔类型什么都不显示，undefined，null也是JSX元素，代表的是空）
          -》循环判断的语句都不支持，单数支持三元运算符
      * 3.循环数组创建JSX元素（一般都基于数组的MAp方法完成迭代），需要给创建的元素设置唯一的KEY值（当前本次循环内唯一即可）
      * 4. 只能出现一个根元素
      * 5. 给元素设置样式类用的是className而不是class
      * 6. style中不能直接写样式字符串，需要基于一个样式对象来遍历赋值


      import React from 'react';
      import ReactDOM from 'react-dom';
      let data = [{name:'skl',age:1},{name:'ll',age:2}];
      ReactDOM.render(
        <div id="box" className="box" style={{"color":"red"}}>
          Hello world!
          <ul>
            {
              data.map((item,index)=>{
                return <li key={ index }>
                  <span>{ item.name }</span>
                  <span>{ item.age }</span>
                </li>
              })
            }
          </ul>
        </div>, 
        document.getElementById('root'),()=>{
          let box = document.querySelector("#box")
          console.log(box)
        });
    */

==============================
3.JSX语法详细解读
  把JSX（虚拟DOM）变为真实的DOM



4.react组件
  1.函数式声明组件
  2.基于继承COMPONENT类类创建组件

    /*
     * 总结：创建组件又两种方式”函数式“，”创建类式“
     * [函数式特点]
      1.简单
      2.能实现的功能也简单，只是简单的调取和返回JSX而已
     * [创建类式]
      1.操作相对复杂一些，但是也可以实现更为复杂的业务功能
      2.能够使用生命周期函数操作业务
      3.函数式可以理解为静态组件（组件中的内容调取的时候已经固定了，很难再修改），而类这种方式，可以基于组件内部的状态来动态更新渲染的内容
      4......
    */

5.react投票组件的编写



6.REF
{/* 
  * 1.ref='spanLeft'
  * 是当前实力上挂载一个属性refs（对象），存储所有的ref元素
  *
  * 2.ref={ x=this.spanLeft = x }
  * x代表当前元素，他的意思是：把当前元素直接挂载到实例上，后期需要用到元素，直接this。spanLeft获取即可

 */}


=================================
在REACT组件中：
  1.基于数据驱动（修改状态，REACT帮助我们重新渲染视图）完成的组件叫做“受控组件（受数据驱动的组件）”
  2.基于REF操作DOM实现视图更新的，叫做“非受控组件
  => 真实项目中，建议大家多使用”受控组件“
=================================


VUE: [MVVM] 数据更改跟着更改，视图更改数据也跟着更改（双向数据绑定）
REACT：[MVC] 数据更改视图跟着更改（原本是单向数据绑定，但是我们可以自己构建出双向的效果）


=================================

生命周期函数（钩子函数）：
  描述一个组件或者程序从创建到销毁的过程，我们可以在过程中间基于钩子函数完成一些自己的操作（例如：在第一次渲染完成做什么，或者在二次即将重新渲染之前做什么等。。。）

  [基本流程]
    constructor 创建一个组件
    componentWillMount 第一次渲染之前
    render 第一次渲染
    componentDidMount 第一次渲染之后

  [修改流程：当组件的状态数据发生改变（SET-STATE）或者传毒给组件的属性发生改变（重新调用组件传递不同的属性）都会引发RENDER重新执行渲染（渲染也是差异渲染）]
    shouldComponentUpdate 是否允许组件重新渲染 （允许则执行后面函数，不允许直接结束即可）
    componentWillUpdate 重新渲染之前
    render 第二次及以后重新渲染
    componentDidUpdate 重新渲染之后

    componentWillReceiveProps:父组件把传递给子组件的属性发生改变后触发的钩子函数

  [卸载：原有渲染的内容是不消失，只不过以后不能基于数据改变视图了 ]
    componentWillUnmount: 卸载组件之前（一般不用）

=================================

redux: 进行状态统一管理的类库（适用于任何技术项目）
  1.只要两个或者多个组件之间想要实现信息共享，都可以基于redux解决，把共享的信息存储到redux容器中进行管理
  2.还可以使用redux做临时存储，页面加载的时候，把从服务器获取的数据信息存储到redux中，组件渲染需要的数据，从redux中获取，这样只要页面不刷新，路由切换的时候，再次渲染组件不要重新从服务器拉去数据，直接从redux中获取即可，页面刷新，从头开始！（这套方案代替了localStorage本地存储，来实现数据缓存）



===============================

react-redux



==================================

使用REACT路由实现SPA
1.安装 yarn add react-router-dom
  3.及以前的版本称为react-router
  4.及最新版本称为react-router-dom

学习REACt路由
  http://reacttraining.cn/web/api

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




============================

/*
 * OA 企业办公管理系统（偏向于日常办公）
 * ERP 企业战略资源管理系统（偏向于管理思想）
    =》 钉钉
    =》 TAPD
    =》 今目标
    =》 纷享销客
    ...

  * CRM : 客户管理系统
  * CMS 内容管理系统（内容分发平台）

  * IM ： 即时通讯系统
*/ 