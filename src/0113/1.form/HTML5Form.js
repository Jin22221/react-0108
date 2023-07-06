import { useState } from 'react'
function HTML5Form() {
  // input-text
  const [inputText, setInputText] = useState('')

  // textarea
  const [textareaText, setTextareaText] = useState('')

  // radio-group
  // state中記錄使用者選了單一值
  const [food, setFood] = useState('素食')
  const foodOptions = ['雞腿飯', '排骨飯', '素食', '宮保雞丁']

  // checkbox one
  const [agree, setAgree] = useState(false)

  // checkbox group 第一種做法
  // state中要記錄使用者選了哪幾個值(複選)
  const [likeList, setLikeList] = useState([])
  const fruitOptions = ['香蕉', '芒果', '鳳梨', '水蜜桃']

  // checkbox group 第二種做法
  // state中要記錄各選項的物件
  // ex.[{id: 0, value:'貓', checked: false}, ...]
  const petOptions = ['貓', '狗', '兔']
  const [pets, setPets] = useState(
    petOptions.map((v, i) => {
      return { id: i, value: v, checked: false }
    })
  )

  return (
    <>
      <h1>可控的表單元件範例</h1>
      <section id="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
      <section id="radio-group">
        <h2>選項按鈕(radio)</h2>
        {foodOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                value={v}
                // 布林值，代表目前是否有被使用者選中
                checked={food === v}
                onChange={(e) => {
                  setFood(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="checkbox-one">
        <h2>核取方塊-單一(checkbox)</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我已閱讀並同意XXX</label>
      </section>
      <section id="checkbox-group">
        <h2>核取方塊1-群組(checkbox)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                // 布林值，代表目前是否有被使用者選中，為真就勾起來
                checked={likeList.includes(v)}
                onChange={(e) => {
                  const targetValue = e.target.value
                  // 先判斷是否有在state陣列(likeList)中
                  if (likeList.includes(v)) {
                    // 如果 有 在state陣列中 -> 從state陣列中移除
                    // 回傳一個新陣列，裡面不包含這值 = 從陣列刪除這值
                    const newLikeList = likeList.filter((v2, i2) => {
                      return v2 !== targetValue
                    })
                    setLikeList(newLikeList)
                  } else {
                    // 如果 沒有 在state陣列中 -> 加入到state陣列
                    const newLikeList = [...likeList, targetValue]
                    setLikeList(newLikeList)
                  }
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="checkbox-group">
        <h2>核取方塊2-群組(checkbox)</h2>
        {pets.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v.value}
                // 布林值，代表目前是否有被使用者選中，為真就勾起來
                checked={v.checked}
                onChange={(e) => {
                  const newPets = pets.map((v2, i2) => {
                    // 當目前 id與 i(使用者點下的那個項目的索引值)相等時，checked值改變
                    if (v2.id === i) return { ...v2, checked: !v2.checked }
                    return { ...v2 }
                  })
                  setPets(newPets)

                  // 精簡寫法
                  // setPets(
                  //   pets.map((v2, i2) =>
                  //     v2.id === i ? { ...v2, checked: !v2.checked } : { ...v2 }
                  //   )
                  // )
                }}
              />
              <label>{v.value}</label>
            </div>
          )
        })}
      </section>
    </>
  )
}
export default HTML5Form
