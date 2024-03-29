// import JSXValue2 from './0109/3.jsx/JSXValue2'
// import Student from './0109/4-1.map/student'
// import Student from './0109/4-2.map/Student'
// import ProductTable from './0109/5.練習題-陣列-map/ProductTable'
// import Counter2 from './0109/6.jsx-inline-if/Counter2'
// import Counter2 from './0109/7.state/Counter2'
// import Login from './0109/7.state/Login'
// import Gearing from './0109/8.useEffect連動/Gearing'
// import Parent from './0110/1.props解構2/Parent'
// import Parent from './0110/3-0.prop-父母子女元件C到P'
// import Parent from './0110/3-1.prop-父母子女元件C到C/Parent'
// import Menu from './0110/4.練習題-選單樣式套用/Menu'
// import Exam2 from './0110/5-0.練習題-物件陣列處理練習/Exam2'
// import ShoppingCart from './0110/6-1.練習題-小型購物車/ShoppingCart'
// import HTML5Form from './0113/1.form/HTML5Form'
// import Exchange from './0113/money-exchange'
// import BMI from './0113/BMI/BMI'
// import BirthForm from './0113/birth/BirthForm'
// import Idform from './0114/1.refs/idform'
// import RefsForm from './0114/1.refs/refsForm'
// import MultipleInput from './0114/2.form-valid/MultipleInput'
// import HTML5ValidForm from './0114/HTML5ValidForm'
// import TodoApp from './0114/4.todo/TodoApp'
// import TodoApp from './0117/1-1拆分元件/TodoApp'
// import TodoApp from './0117/1-5拆分元件 -資料夾對應階層/TodoApp'
// import TodoApp from './0117/1-6.練習題-todo-過濾項目操作介面與state/TodoApp'
// import TodoApp from './0117/1-7.練習題-todo-過濾項目按鈕改為map與加入中文/TodoApp'
// import TodoApp from './0117/1-8.練習題-todo-過濾功能完成/TodoApp'
// import TodoApp from './0117/1-9.練習題-todo-拆分過濾功能元件/TodoApp'
// import TodoApp from './0117/1-11.練習題-todo-編輯項目介面與state/TodoApp'
// import TodoApp from './0117/1-12.練習題-todo-編輯項目功能完成/TodoApp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

// import Main from './0117/2-lifecycle/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="user" element={<User />} />
            <Route path="product" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
