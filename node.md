# react
> 2022/05/13

## 环境
1. 安装react脚手架：npm install -g create-react-app
2. 创建项目：create-react-app my-react-project


## 特性
1. 函数、类(React.Component) 都能作为组件使用
   函数组件：不包含state,接收props作为参数, 返回需要渲染的元素。
   类组件：
2. JSX：类似于xml，是一个javascirpt语法扩展，可当做变量赋值.
   React DOM 使用camelCase来定义属性名称，而不是html属性名称的命名约定。例如：class变为className.
3. setState()更新数据
4. 组件生命周期：
  componentDidMount：组件已经被渲染到DOM中后运行
  componentDidUpdate：组件发生更新
  componentWillUnmount：组件从 DOM 中被移除

5. 事件
   jsx绑定事件：
   1. () => this.handleClick(),重新渲染会导致创建不同的回调函数
   2. this.handleClick = this.handleClick().bind(this)

6. 



<!-- 6. 可变对象、改变对象
   不可变对象, 是否发生改变，从而确定何时对组件重新渲染。
   性能优化：prue components shouldComponentsUpdate() -->