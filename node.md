# react
> 2022/05/13

## 环境
1. 安装react脚手架：npm install -g create-react-app
2. 创建项目：create-react-app my-react-project


## 特性
1. 函数、类(React.Component) 都能作为组件使用
   函数组件：不包含state,接收props作为参数, 返回需要渲染的元素。
   类组件：
2. setState()更新数据
3. html能当做data变量使用
4. 可变对象、改变对象
不可变对象, 是否发生改变，从而确定何时对组件重新渲染。
性能优化：prue components shouldComponentsUpdate()
