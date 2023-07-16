import { useState } from 'react'

function MultipleInput() {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    showPassword: false,
  })

  const handleFieldChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value)
    if (e.target.name === 'showPassword') {
      setUser({ ...user, showPassword: e.target.checked })
      return //跳出函式執行
    }
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h1>多個表單輸入共用處理函式</h1>
      <div>
        <label>姓名</label>
        <input
          type="text"
          name="fullname"
          value={user.fullname}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>密碼</label>
        <input
          type={user.showPassword ? 'text' : 'password'}
          name="password"
          value={user.password}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="showPassword"
          checked={user.showPassword}
          onChange={handleFieldChange}
        />
        顯示輸入的密碼
      </div>
    </>
  )
}

export default MultipleInput
