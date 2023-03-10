import { useState } from 'react'

function MultipleInput() {
  //1.保持state在應用程式執行過程中資料類型一致
  //2.當使用物件作為state時，初始值的選擇盡可能不要使用空物件或null
  //3. 物件的初始值，使用表單元素的名稱作為屬性名
  const [user, setUser] = useState({
    fullname: 'bob',
    email: '',
    username: '',
    password: '',
    showPassword: '',
  })

  const handleFieldChange = (e) => {
    //可以利用下面三個觸發事件的東西來做進一步處理
    console.log(e.target.type, e.target.name, e.target.value, e.target.checked)
    //只針對checkbox(showPassword)使用
    if (e.target.name === 'showPassword') {
      setUser({ ...user, showPassword: e.target.checked })
      return //跳出函式執行
    }
    //以下依照通用三步驟原則來更新狀態
    // 1 , 2
    // ES6中新語法: Computed property names(計算得來屬性名稱)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newUser = { ...user, [e.target.name]: e.target.value }
    //3
    setUser(newUser)
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
      <input
        type="checkbox"
        name="showPassword"
        checked={user.showPassword}
        onChange={handleFieldChange}
      />
      顯示輸入的密碼
    </>
  )
}

export default MultipleInput
