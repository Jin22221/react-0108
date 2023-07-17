import { useState } from 'react'
import './HTML5ValidForm.scss'

function HTML5ValidForm() {
  //1.保持state在應用程式執行過程中資料類型一致
  //2.當使用物件作為state時，初始值的選擇盡可能不要使用空物件或null
  //3. 物件的初始值，使用表單元素的名稱作為屬性名
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    showPassword: false, //用於切換密碼欄位類型使用
    password2: '',
    showPassword2: false, //用於切換密碼欄位類型使用
  })

  // 此狀態是為了把錯誤訊息顯示在我們想放的地方
  const [fieldErrors, setFieldErrors] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    password2: '',
  })

  const handleFieldChange = (e) => {
    //可以利用下面觸發事件的東西來做進一步處理
    // console.log(e.target.type, e.target.name, e.target.value, e.target.checked)

    //只針對checkbox(showPassword)使用
    if (e.target.name === 'showPassword') {
      setUser({ ...user, showPassword: e.target.checked })
      return //跳出函式執行
    }

    //只針對checkbox(showPassword2)使用
    if (e.target.name === 'showPassword2') {
      setUser({ ...user, showPassword2: e.target.checked })
      return //跳出函式執行
    }

    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 表單完全合法(通過驗証)後才會觸發
  const handleSubmit = (e) => {
    //阻擋預設的form送出
    e.preventDefault()

    //獲得目前的表單輸入值
    //1.從state獲得(假如是可控)
    console.log(user, 'user')

    //2.用FormData API獲得(假如是不可控)
    const formData = new FormData(e.target)
    console.log(formData.get('fullname'), formData.get('email'))

    //作額外的/客製的檢查工作
    if (user.password !== user.password2) {
      setFieldErrors({
        ...fieldErrors,
        password: '密碼與確認密碼欄位值不相同',
        password2: '密碼與確認密碼欄位值不相同',
      })
      return
    }
    //作額資料整理/整合工作

    //作送伺服器(fetch, ajax...)
  }

  const handleInvaild = (e) => {
    // 第一行要阻擋預設的form行為-泡泡錯誤訊息
    e.preventDefault()

    // console.log('檢查有錯誤了！', e.target.name, e.target.validationMessage)

    // 記錄錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  // 當使用者回頭修正表單中任一欄位時，先清除此欄位的錯誤訊息
  const handleFormChange = (e) => {
    setFieldErrors({ ...fieldErrors, [e.target.name]: '' })
  }
  return (
    <>
      <h1>HTML5表單驗證</h1>
      {/* onInvalid是表單有發生驗証錯誤時，會觸發此事件 */}
      <form
        action=""
        onSubmit={handleSubmit}
        onInvalid={handleInvaild}
        onChange={handleFormChange}
      >
        <div>
          <label>姓名</label>
          <input
            type="text"
            name="fullname"
            value={user.fullname}
            onChange={handleFieldChange}
            required //加入必填屬性
          />
          <span className="error">{fieldErrors.fullname}</span>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
            required
          />
          <span className="error">{fieldErrors.email}</span>
        </div>
        <div>
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
            required
          />
          <span className="error">{fieldErrors.username}</span>
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
          <input
            type="checkbox"
            name="showPassword"
            checked={user.showPassword}
            onChange={handleFieldChange}
          />
          顯示輸入的密碼
          <span className="error">{fieldErrors.password}</span>
        </div>
        <div>
          <label>確認密碼</label>
          <input
            // 用showPassword的布林值來切換文字輸入框類型
            type={user.showPassword2 ? 'text' : 'password'}
            name="password2"
            value={user.password2}
            onChange={handleFieldChange}
            required
            //最少要輸入6個字元 最多10個
            minLength={6}
            maxLength={10}
          />
          <input
            type="checkbox"
            name="showPassword2"
            checked={user.showPassword2}
            onChange={handleFieldChange}
          />
          顯示輸入的密碼
          <span className="error">{fieldErrors.password2}</span>
        </div>
        <br />
        <button type="submit">提交</button>
        <hr />
        {/* 在form標記中加入button，建議寫上type，因為沒加註type相當於submit */}
        <button
          type="button"
          onClick={() => {
            setUser({
              fullname: '馬英九',
              email: 'k33a@gmail.com',
              username: 'abc',
              password: '12345',
              password2: '12345',
              showPassword: true,
              showPassword2: true,
            })
          }}
        >
          填入正確範例資料
        </button>
        <button
          type="button"
          onClick={() => {
            setUser({
              fullname: '張小花',
              email: 'abc',
              username: '',
              password: '234',
              password2: '234',
              showPassword: true,
              showPassword2: true,
            })
          }}
        >
          填入錯誤範例資料
        </button>
      </form>
    </>
  )
}

export default HTML5ValidForm
