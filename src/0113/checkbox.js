import { useState } from 'react'

function CheckBox() {
  //checkbox one
  const [agree, setAgree] = useState('')

  //checkbox group
  //state中要紀錄使者選了哪幾個值(複選)
  const [likeList, setLikeList] = useState(['香蕉'])
  const fruitOption = ['芒果', '香蕉', '火龍果']
  return (
    <>
      <section id="checkbox-one">
        <h2>核取方塊(單一)</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我以閱讀並同意</label>
      </section>
      <section>
        <h2>核取方塊(群組)</h2>
        {fruitOption.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={likeList.includes(v)}
                onChange={(e) => {}}
              />
              <label htmlFor="">{v}</label>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default CheckBox
