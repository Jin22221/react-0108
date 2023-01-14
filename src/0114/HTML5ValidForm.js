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
    showPassword: '', //用於切換密碼欄位類型使用
  })

  const handleFieldChange = (e) => {
    //可以利用下面三個觸發事件的東西來做進一步處理
    // console.log(e.target.type, e.target.name, e.target.value, e.target.checked)
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
      <h1>HTML5表單驗證</h1>
      <form action="">
        <div>
          <label>姓名</label>
          <input
            type="text"
            name="fullname"
            value={user.fullname}
            onChange={handleFieldChange}
            required //加入必填屬性
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
            // 用showPassword的布林值來切換文字輸入框類型
            type={user.showPassword ? 'text' : 'password'}
            name="password"
            value={user.password}
            onChange={handleFieldChange}
            required
            //最少要輸入6個字元 最多10個
            minLength={6}
            maxLength={10}
          />
        </div>
        <input
          type="checkbox"
          name="showPassword"
          checked={user.showPassword}
          onChange={handleFieldChange}
        />
        顯示輸入的密碼
        <br />
        <button type="buttton">提交</button>
        {/* 在form標記中加入button，建議寫上type，因為沒加註type相當於submit */}
      </form>
    </>
  )
}

export default MultipleInput
