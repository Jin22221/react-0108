import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

//引入頁面元件
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import User from './pages/User'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Products />} />
          <Route path="user" element={<User />} />
          <Route path="*" element={<NotFound />} />
          {/* 404找不到網頁用的頁面 */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
