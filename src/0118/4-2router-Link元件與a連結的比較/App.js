import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 引入頁面元件
import Home from './pages/Home'
import User from './pages/User'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <h2>a連結</h2>
      <a href="/">home</a> <a href="user">user</a>
      <hr />
      <h2>Link元件</h2>
      <Link to="/">home</Link> <Link to="user">user</Link>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="user" element={<User />} />
        {/* NotFound是`404找不到網頁`的頁面 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
