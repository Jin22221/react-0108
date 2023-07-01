import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <h1>會員登入範例</h1>
      <div>
        帳號:
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            //例如要從伺服器檢查是否有此帳號
            console.log('username =', username)
            console.log('e.target.value =', e.target.value)
          }}
        />
      </div>
      <div>
        密碼:
        <input
          type="text"
          value={password}
          name="password"
          onChange={(e) => {
            setPassword(e.target.value)
            //例如要檢查 password長度
            console.log('password.length =', password.length)
            console.log('e.target.value.length =', e.target.value.length)
          }}
        />
        {password.length}
      </div>
      <button>登入</button>
    </>
  )
}
export default Login
