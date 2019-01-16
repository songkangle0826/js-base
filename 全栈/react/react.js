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