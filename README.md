# Fy
Fy专属，就是任性，任性我做主（主打亲情，爱情，友情）
一.项目管理git与Github
1.git安装
2.创建Github账号
3.配置本地git与github的关联(mac环境)
cd ~/ .ssh 检查是否存在ssh key ,没有创建ssh key
ssh-keygen -t rsa -C "github上的邮件地址" 创建一个新的ssh key
/**
 * 本地项目提交到GitHub,首先在github上面创建于本地项目同名的仓库，然后复制其ssh地址git@github.com:FzbGithub，然后执行如下代码，
 * 第一次上传到github成功
 *git init ,git add . , git commit -m "第一次从本地上传全部文件"
 * git remote add origin git@github.com:FzbGithub/Fy.git， 第一次提交 git push -u origin master,
 * 以后上传到github就可以直接git push 就行了
 */
/**
 * 全局安装node.js,webpack，项目安装vue,webpack
 */
/**
 *文件目录说明
 *dist--编译后的文件
 *src--存放源文件
 * +base64--存放额外的base64图片文件
 * +comments--存放所有的自定义组件
 * +images--存放额外的图片
 * +lib--存放额外依赖的库文件
 * +views--存放所有的vue组件的模版
 * +main.js--项目的入口文件
 * +router.js --项目的路由文件
 *.babelrc--es6的过滤文件
 *index.html--项目的入口html
 *package.json--npm的安装配置
 *README.md--项目的基本介绍，包括作者的主要介绍以及项目基本功能接收以及使用样例
 *webpack.config--项目的打包编译文件
 */
/**
 * 配置es6语法支持
 * 安装babel-loader,babel-core,babel-preset-es2015,通过npm安装
 * 在webpack.congig.js配置babel-loader,{loader:/.jsx?$/,loader:'babel',exclude:''/node_modules'}
 */
/**
 *关于es6的语法
 *let 与 var:let是为块级作用域，只在它当前的块级有效，不会像var那样变量升级
 *const与let:两者的作用域相同，都只在当前的块级有效，但是const只能赋值一次，再次赋值不会改变
 *变量的解构赋值：es6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，称为解构var [foo,a,b]=[1,2,3]或var {foo,bar}={foo:'aaa',bar:'bbb'}
 *字符串扩展
 *数值扩展
 *数组扩展：Array.from()将有两类对象转化为真正的数组：类型数组对象(array-link-object)和可遍历对象(iterable),包括es6新增的Set和Map
 *         Array.of()将一组值转化为数组
           Array.find(function(value,index,arr) {})找到第一个符合条件的元素，找到返回该元素否则返回undefined
           Array.fill(value,start,end)使用给定值填充数组[a,b,c].fill(7)//[7,7,7]
           Array.entries(),Array.keys(),Array.values()用于对数组键值对，键，值遍历，都返回一个遍历器
 *对象扩展：属性的简洁表示,属性名表达式
 *         Object.is()比较两个对象是否严格相等，与严格比较云算法===行为一致
           Object.assign(target,source1,source...)将源对象所有可枚举的属性复制到目标对象
           proto属性，Object.setPrototypeOf(),Object.getPrototypeOf()
           Symbol原始数据类型，通过Symbol函数生成，表示独一无二的ID； var s=Symbol();var c=Symbol('test'),c.name=='test'//true
           proxy在目标对象之前，架设一层拦截，外界对该对象的访问都得先经过这层拦截
           Object.observe()，Object.unobserve()用来监听或取消监听对象（以及数组）的变化。一旦监听对象发生变化，就会触发回调函数。
 *函数的扩展：函数参数指定默认值，rest参数，
            箭头函数：只有一个参数时，参数部分直接写，当不需要参数或需要多个参数时，需用圆括号()代表参数部分
                     当函数的代码多于一条语句时，要用大括号{}括起来，并且用return返回，此大括号{}表示一个代码块
                     当返回一个对象时，必须在对象外面加个括号
 *Set和Map数据结构：
 *Iterator和for...of循环
 *Generator函数
 *Promise对象
 *Class和Module

 */