import { useState } from 'react'

function Form() {
  const [inputText, setInputText] = useState('')

  //textarea
  const [textareaText, setTextareaText] = useState('')

  //radio-group
  const [sex, setSex] = useState('')
  const sexOptions = ['男', '女', '不提供']
  return (
    <>
      <h1>可控的表單元件範例</h1>
      <section>
        <h2>文字輸入框</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h2>文字輸入區域</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
      {/* <section id="radio-group">
        <h2>選項按鈕(radio-group)</h2>
        <input
          type="radio"
          value={'男'}
          checked={true}
          onChange={(e) => {
            setSex(e.target.value)
          }}
        />
        <label>男</label>
        <input type="radio" />
        <label>女</label>
        <input type="radio" />
        <label>不提供</label>
      </section> */}
      <section id="radio-group">
        <h2>選項按鈕(radio-group)</h2>
        {sexOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                value={i}
                checked={sex === v}
                onChange={(e) => {
                  setSex(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Form

//---------------------
// const Form = () =><></>//不建議此寫法 太簡短 不好除錯 到底是常數還是函式

// export default Form
